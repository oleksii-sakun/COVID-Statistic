import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Loader, Search, SearchProps } from "semantic-ui-react";
import CountryItem from "./CountryItem";
import logo from "../images/logo.png";
import "../components/styles.scss";
import { getCountriesData } from "../api";
import DetailedInformationModal from "./DetailedInformationModal";
import {
  filterCountriesByName,
  sortByAlphabet,
  sortByTotalConfirmed,
} from "./countriesDataHelpers";
import { toast } from "react-toastify";
import { Country } from "./interfaces";

export default function Table(): JSX.Element {
  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [filtredCountriesData, setFilteredCountriesData] = useState<Country[]>(
    []
  );
  const [loader, setLoader] = useState(false);
  const [countryToModal, setCountryToModal] = useState<null | Country>(null);
  const searchInputSize = window.innerWidth < 813 ? "tiny" : "big";

  useEffect(() => {
    setLoader(true);

    getCountriesData()
      .then((countriesData) => {
        setCountriesData(countriesData);
        setFilteredCountriesData(countriesData);
        setLoader(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  const handleSetCountryToModal = (country: Country) => {
    setCountryToModal(country);
  };

  const handleResetCountryToModal = () => {
    setCountryToModal(null);
  };

  const handleAlphabetSortDESC = () => {
    setFilteredCountriesData(sortByAlphabet(filtredCountriesData, "DESC"));
  };
  const handleAlphabetSortASC = () => {
    setFilteredCountriesData(sortByAlphabet(filtredCountriesData, "ASC"));
  };

  const handleCountryFilterByName = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    data: SearchProps
  ) => {
    setFilteredCountriesData(filterCountriesByName(countriesData, data.value));
  };

  const handleCountrySortByTotalConfirmedDECR = () => {
    setFilteredCountriesData(
      sortByTotalConfirmed(filtredCountriesData, "DECR")
    );
  };

  const handleCountrySortByTotalConfirmedINCR = () => {
    setFilteredCountriesData(
      sortByTotalConfirmed(filtredCountriesData, "INCR")
    );
  };

  return (
    <div>
      <Loader active={loader} inline="centered" size="huge" />
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
      </div>
      <header className="app-header">
        <div className="app-header__logo">
          <img src={logo}></img>
          <h1>STATISTIC</h1>
        </div>
        <div>
          <Search
            onSearchChange={handleCountryFilterByName}
            placeholder="Search..."
            size={searchInputSize}
            className="country-search"
          ></Search>
        </div>
      </header>
      <main>
        <div className="table-header">
          <div className="country-number">
            <p>№</p>
          </div>
          <div className="country-name">
            <p>Country</p>
            <div>
              <button className="filter__btn" onClick={handleAlphabetSortASC}>
                <Icon name="sort alphabet down" />
              </button>
              <button className="filter__btn" onClick={handleAlphabetSortDESC}>
                <Icon name="sort alphabet up" />
              </button>
            </div>
          </div>
          <div className="country-confirmed">
            <p>Total Confirmed</p>
            <div>
              <button
                className="filter__btn"
                onClick={handleCountrySortByTotalConfirmedDECR}
              >
                <Icon name="sort numeric up" />
              </button>
              <button
                className="filter__btn"
                onClick={handleCountrySortByTotalConfirmedINCR}
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
