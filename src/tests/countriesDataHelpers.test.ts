import {
  filterCountriesByName,
  sortByAlphabet,
  sortByTotalConfirmed,
} from "../components/countriesDataHelpers";
import { Country } from "../components/interfaces";

describe("App", () => {
  describe("sortByAlphabet", () => {
    it("should sort in ASC order correctly", () => {
      expect(
        sortByAlphabet(
          [
            { Country: "Barbados" },
            { Country: "Indonesia" },
            { Country: "Ukraine" },
            { Country: "Albania" },
            { Country: "Mexico" },
          ] as Country[],
          "ASC"
        )
      ).toEqual([
        { Country: "Albania" },
        { Country: "Barbados" },
        { Country: "Indonesia" },
        { Country: "Mexico" },
        { Country: "Ukraine" },
      ]);
    });

    it("should sort in DSC order correctly", () => {
      expect(
        sortByAlphabet(
          [
            { Country: "Barbados" },
            { Country: "Indonesia" },
            { Country: "Ukraine" },
            { Country: "Albania" },
            { Country: "Mexico" },
          ] as Country[],
          "DESC"
        )
      ).toEqual([
        { Country: "Ukraine" },
        { Country: "Mexico" },
        { Country: "Indonesia" },
        { Country: "Barbados" },
        { Country: "Albania" },
      ]);
    });
  });
  describe("sortByTotalConfirmed", () => {
    it("should sort in DECR order correctly", () => {
      expect(
        sortByTotalConfirmed(
          [
            { TotalConfirmed: 55000 },
            { TotalConfirmed: 105 },
            { TotalConfirmed: 205100 },
            { TotalConfirmed: 10 },
            { TotalConfirmed: 120 },
            { TotalConfirmed: 7 },
            { TotalConfirmed: 500 },
            { TotalConfirmed: 1305 },
          ] as Country[],
          "DECR"
        )
      ).toEqual([
        { TotalConfirmed: 205100 },
        { TotalConfirmed: 55000 },
        { TotalConfirmed: 1305 },
        { TotalConfirmed: 500 },
        { TotalConfirmed: 120 },
        { TotalConfirmed: 105 },
        { TotalConfirmed: 10 },
        { TotalConfirmed: 7 },
      ]);
    });

    it("should sort in INCR order correctly", () => {
      expect(
        sortByTotalConfirmed(
          [
            { TotalConfirmed: 55000 },
            { TotalConfirmed: 105 },
            { TotalConfirmed: 205100 },
            { TotalConfirmed: 10 },
            { TotalConfirmed: 120 },
            { TotalConfirmed: 7 },
            { TotalConfirmed: 500 },
            { TotalConfirmed: 1305 },
          ] as Country[],
          "INCR"
        )
      ).toEqual([
        { TotalConfirmed: 7 },
        { TotalConfirmed: 10 },
        { TotalConfirmed: 105 },
        { TotalConfirmed: 120 },
        { TotalConfirmed: 500 },
        { TotalConfirmed: 1305 },
        { TotalConfirmed: 55000 },
        { TotalConfirmed: 205100 },
      ]);
    });
  });
  describe("filterCountriesByName", () => {
    it("should find countries by value in search input", () => {
      expect(
        filterCountriesByName(
          [
            { Country: "Barbados" },
            { Country: "Indonesia" },
            { Country: "Ukraine" },
            { Country: "Albania" },
            { Country: "Mexico" },
            { Country: "India" },
          ] as Country[],
          "ind"
        )
      ).toEqual([{ Country: "Indonesia" }, { Country: "India" }]);
    });
    it("shouldn't find countries by value in search input", () => {
      expect(
        filterCountriesByName(
          [
            { Country: "Barbados" },
            { Country: "Indonesia" },
            { Country: "Ukraine" },
            { Country: "Albania" },
            { Country: "Mexico" },
            { Country: "India" },
          ] as Country[],
          "qqq"
        )
      ).toEqual([]);
    });
  });
});
