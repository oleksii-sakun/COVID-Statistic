import axios from "axios";
import { Country } from "../components/interfaces";

const baseUrl = "https://api.covid19api.com";

export const getData = async (): Promise<Country[]> => {
  const { data } = await axios.get(`${baseUrl}/summary`);
  const countries = await data.Countries;

  return countries;
};
