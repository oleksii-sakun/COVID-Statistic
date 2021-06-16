import axios from "axios";
import urljoin from "url-join";
import { Country } from "../components/interfaces";

const baseUrl = "https://api.covid19api.com";

export const getCountriesData = async (): Promise<Country[]> => {
  const { data } = await axios.get(urljoin(baseUrl, "summary"));
  const countries = await data.Countries;

  return countries;
};
