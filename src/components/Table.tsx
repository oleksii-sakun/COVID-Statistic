import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Loader, Search } from "semantic-ui-react";
import CountryItem from "./CountryItem";
import logo from "../images/logo.png";
import "../components/styles.scss";
import { getData } from "../api";
import DetailedInformationModal from "./DetailedInformationModal";
import {
  filterFilmsByName,
  sortByAlphabetDown,
  sortByAlphabetUp,
  sortByTotalConfirmedDecrease,
  sortByTotalConfirmedIncrease,
} from "./appFunctions";
import { toast } from "react-toastify";
import { Country } from "./interfaces";

export default function Table(): JSX.Element {
  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [filtredCountriesData, setFilteredCountriesData] = useState<Country[]>(
    []
  );
  const [loader, setLoader] = useState(false);
  const [countryToModal, setCountryToModal] = useState<null | Country>(null);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    setLoader(true);
    async function getCountriesData() {
      try {
        const data = await getData();
        setCountriesData(data);
        setFilteredCountriesData(data);
        setLoader(false);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getCountriesData();
  }, []);

  const handleSetCountryToModal = (country: Country) => {
    setCountryToModal(country);
  };

  const handleResetCountryToModal = () => {
    setCountryToModal(null);
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
        <div className="header__logo">
          <img src={logo}></img>
          <h1>STATISTIC</h1>
        </div>
        <div className="header__search">
          <Search
            onSearchChange={(_event, data) =>
              filterFilmsByName(
                countriesData,
                setFilteredCountriesData,
                data.value
              )
            }
            placeholder="Search..."
            size={windowWidth < 813 ? "tiny" : "big"}
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
              <button
                className="filter__btn"
                onClick={() =>
                  sortByAlphabetDown(
                    filtredCountriesData,
                    setFilteredCountriesData
                  )
                }
              >
                <Icon name="sort alphabet down" />
              </button>
              <button
                className="filter__btn"
                onClick={() =>
                  sortByAlphabetUp(
                    filtredCountriesData,
                    setFilteredCountriesData
                  )
                }
              >
                <Icon name="sort alphabet up" />
              </button>
            </div>
          </div>
          <div className="country-confirmed">
            <p>Total Confirmed</p>
            <div>
              <button
                className="filter__btn"
                onClick={() =>
                  sortByTotalConfirmedDecrease(
                    filtredCountriesData,
                    setFilteredCountriesData
                  )
                }
              >
                <Icon name="sort numeric up" />
              </button>
              <button
                className="filter__btn"
                onClick={() =>
                  sortByTotalConfirmedIncrease(
                    filtredCountriesData,
                    setFilteredCountriesData
                  )
                }
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
