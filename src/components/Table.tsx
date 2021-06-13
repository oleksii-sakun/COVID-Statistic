import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Search } from "semantic-ui-react";
import CountryItem from "./CountryItem";
import logo from "../images/logo.png";
import "../components/styles.scss";
import { getData } from "../api";

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
  const [countriesData, setCountriesData] = useState([
    {
      Country: "Andorra",
      CountryCode: "AD",
      Slug: "andorra",
      NewConfirmed: 27,
      TotalConfirmed: 466,
      NewDeaths: 1,
      TotalDeaths: 17,
      NewRecovered: 5,
      TotalRecovered: 21,
      Date: "2020-04-05T06:37:00Z",
    },
  ]);

  function filterFilmsByName(countriesData: Countries[], data: any) {
    setCountriesData(
      countriesData.filter((countriesData) =>
        countriesData.Country.toLowerCase().includes(data.toLowerCase())
      )
    );
  }

  useEffect(() => {
    async function getCountriesData() {
      setCountriesData(await getData());
    }
    getCountriesData();
  }, []);

  return (
    <div>
      <header className="app-header">
        <div className="header__logo">
          <img src={logo}></img>
          <h1>STATISTIC</h1>
        </div>
        <div className="header__search">
          <Search
            onSearchChange={(_event, data) =>
              filterFilmsByName(countriesData, data.value)
            }
            placeholder="Search..."
            size="big"
            className="country-search"
          ></Search>
        </div>
      </header>
      <main>
        <div className="table-header">
          <div className="country-number">№</div>
          <div className="country-name">Country</div>
          <div className="country-confirmed">Total Confirmed</div>
        </div>
        <div>
          {countriesData.map((country, number) => {
            return (
              <CountryItem
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
