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
      <div className="country-item-number">{number}</div>
      <div className="country-item-name">{countryName}</div>
      <div className="country-item-confirmed">{totalConfirmed}</div>
    </div>
  );
}
