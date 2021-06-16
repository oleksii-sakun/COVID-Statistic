import { Country } from "./interfaces";

export function sortByAlphabet(
  list: Country[],
  order: "ASC" | "DESC"
): Country[] {
  return [...list].sort((a, b) => {
    const nameA = a.Country.toLowerCase();
    const nameB = b.Country.toLowerCase();
    if (nameA > nameB) return order === "ASC" ? 1 : -1;
    if (nameA < nameB) return order === "ASC" ? -1 : 1;

    return 0;
  });
}

export function sortByTotalConfirmed(
  list: Country[],
  order: "DECR" | "INCR"
): Country[] {
  return [...list].sort((a, b) => {
    if (order === "DECR") return b.TotalConfirmed - a.TotalConfirmed;
    if (order === "INCR") return a.TotalConfirmed - b.TotalConfirmed;

    return 0;
  });
}

export function filterCountriesByName(
  list: Country[],
  value: string | undefined
): Country[] {
  return value
    ? list.filter((countriesData) =>
        countriesData.Country.toLowerCase().includes(value.toLowerCase())
      )
    : list;
}
