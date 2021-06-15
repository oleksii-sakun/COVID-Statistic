import { Country } from "./interfaces";

export const sortByAlphabetUp = (
  arrayToSort: Country[],
  useStateSetter: React.Dispatch<React.SetStateAction<Country[]>>
): void => {
  const sortedByCountyrName = arrayToSort.sort((a, b) => {
    const nameA = a.Country.toLowerCase();
    const nameB = b.Country.toLowerCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  });
  useStateSetter([...sortedByCountyrName]);
};

export const sortByAlphabetDown = (
  arrayToSort: Country[],
  useStateSetter: React.Dispatch<React.SetStateAction<Country[]>>
): void => {
  const sortedByCountyrName = arrayToSort.sort((a, b) => {
    const nameA = a.Country.toLowerCase();
    const nameB = b.Country.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  useStateSetter([...sortedByCountyrName]);
};

export const sortByTotalConfirmedDecrease = (
  arrayToSort: Country[],
  useStateSetter: React.Dispatch<React.SetStateAction<Country[]>>
): void => {
  const sortedByTotalConfirmed = arrayToSort.sort((a, b) => {
    return b.TotalConfirmed - a.TotalConfirmed;
  });
  useStateSetter([...sortedByTotalConfirmed]);
};

export const sortByTotalConfirmedIncrease = (
  arrayToSort: Country[],
  useStateSetter: React.Dispatch<React.SetStateAction<Country[]>>
): void => {
  const sortedByTotalConfirmed = arrayToSort.sort((a, b) => {
    return a.TotalConfirmed - b.TotalConfirmed;
  });
  useStateSetter([...sortedByTotalConfirmed]);
};

export function filterFilmsByName(
  arrayToFilter: Country[],
  useStateSetter: React.Dispatch<React.SetStateAction<Country[]>>,
  value: string | undefined
): void {
  if (value) {
    useStateSetter(
      arrayToFilter.filter((countriesData) =>
        countriesData.Country.toLowerCase().includes(value.toLowerCase())
      )
    );
  } else useStateSetter(arrayToFilter);
}
