import React from "react";
import { CountryItemProps } from "./interfaces";

export default function CountryItem({
  number,
  countryName,
  totalConfirmed,
  onClick,
}: CountryItemProps): JSX.Element {
  return (
    <div className="country-item" onClick={onClick}>
      <div className="country-item__number">{number}</div>
      <div className="country-item__name">{countryName}</div>
      <div className="country-item__confirmed">{totalConfirmed}</div>
    </div>
  );
}
