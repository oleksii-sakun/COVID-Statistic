import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Loader, Search } from "semantic-ui-react";
import CountryItem from "./CountryItem";
import logo from "../images/logo.png";
import "../components/styles.scss";
import { getData } from "../api";
import DetailedInformationModal from "./DetailedInformationModal";

export interface Countries {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export default function Table(): JSX.Element {
  const [countriesData, setCountriesData] = useState<Countries[]>([]);
  const [filtredCountriesData, setFilteredCountriesData] = useState<
    Countries[]
  >([]);
  const [loader, setLoader] = useState(false);
  const [countryToModal, setCountryToModal] = useState<null | Countries>(null);

  function filterFilmsByName(value: string | undefined) {
    if (value) {
      setFilteredCountriesData(
        countriesData.filter((countriesData) =>
          countriesData.Country.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else setFilteredCountriesData(countriesData);
  }

  useEffect(() => {
    setLoader(true);
    async function getCountriesData() {
      const data = await getData();
      setCountriesData(data);
      setFilteredCountriesData(data);
      setLoader(false);
    }
    getCountriesData();
  }, []);

  const handleSetCountryToModal = (country: Countries) => {
    setCountryToModal(country);
  };

  const handleResetCountryToModal = () => {
    setCountryToModal(null);
  };

  const sortByTotalConfirmedIncrease = () => {
    const sortedByTotalConfirmed = filtredCountriesData.sort((a, b) => {
      return a.TotalConfirmed - b.TotalConfirmed;
    });
    setFilteredCountriesData([...sortedByTotalConfirmed]);
  };

  const sortByTotalConfirmedDecrease = () => {
    const sortedByTotalConfirmed = filtredCountriesData.sort((a, b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });
    setFilteredCountriesData([...sortedByTotalConfirmed]);
  };

  const sortByAlphabetDown = () => {
    const sortedByCountyrName = filtredCountriesData.sort((a, b) => {
      const nameA = a.Country.toLowerCase();
      const nameB = b.Country.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setFilteredCountriesData([...sortedByCountyrName]);
  };

  const sortByAlphabetUp = () => {
    const sortedByCountyrName = filtredCountriesData.sort((a, b) => {
      const nameA = a.Country.toLowerCase();
      const nameB = b.Country.toLowerCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    });
    setFilteredCountriesData([...sortedByCountyrName]);
  };

  return (
    <div>
      <div>
        {countryToModal && (
          <DetailedInformationModal
            countryName={countryToModal.Country}
            totalConfirmed={countryToModal.TotalConfirmed}
            totalDeaths={countryToModal.TotalDeaths}
            totalRecovered={countryToModal.TotalRecovered}
            onClose={handleResetCountryToModal}
          />
        )}
        <div />
        <Loader active={loader} inline="centered" size="huge" />
      </div>

      <header className="app-header">
        <div className="header__logo">
          <img src={logo}></img>
          <h1>STATISTIC</h1>
        </div>
        <div className="header__search">
          <Search
            onSearchChange={(_event, data) => filterFilmsByName(data.value)}
            placeholder="Search..."
            size="big"
            className="country-search"
          ></Search>
        </div>
      </header>
      <main>
        <div className="table-header">
          <div className="country-number">№</div>
          <div className="country-name">
            Country
            <div>
              <button className="filter__btn" onClick={sortByAlphabetDown}>
                <Icon name="sort alphabet down" />
              </button>
              <button className="filter__btn" onClick={sortByAlphabetUp}>
                <Icon name="sort alphabet up" />
              </button>
            </div>
          </div>
          <div className="country-confirmed">
            <p>Total Confirmed</p>
            <div>
              {/* <button className="filter__btn" onClick={sortByAlphabetDown}>
                <Icon name="redo" />
              </button> */}
              <button
                className="filter__btn"
                onClick={sortByTotalConfirmedDecrease}
              >
                <Icon name="sort numeric up" />
              </button>
              <button
                className="filter__btn"
                onClick={sortByTotalConfirmedIncrease}
              >
                <Icon name="sort numeric down" />
              </button>
            </div>
          </div>
        </div>
        <div>
          {filtredCountriesData.map((country, number) => {
            return (
              <CountryItem
                onClick={() => handleSetCountryToModal(country)}
                key={country.CountryCode}
                countryName={country.Country}
                totalConfirmed={country.TotalConfirmed}
                number={number + 1}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
