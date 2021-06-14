import axios from "axios";
import { Countries } from "../components/Table";

export const getData = async (): Promise<Countries[]> => {
  const { data } = await axios.get("https://api.covid19api.com/summary");
  const countries = await data.Countries;

  return countries;
};
