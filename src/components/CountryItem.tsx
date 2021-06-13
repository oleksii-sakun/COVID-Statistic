import React from "react";

interface Country {
  key: string;
  number: number;
  countryName: string;
  totalConfirmed: number;
}

export default function CountryItem({
  number,
  countryName,
  totalConfirmed,
}: Country): JSX.Element {
  return (
    <div className="country-item">
      <div className="country-item-number">{number}</div>
      <div className="country-item-name">{countryName}</div>
      <div className="country-item-confirmed">{totalConfirmed}</div>
    </div>
  );
}
