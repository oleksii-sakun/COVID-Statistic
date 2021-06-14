import React from "react";

interface Country {
  key: string;
  number: number;
  countryName: string;
  totalConfirmed: number;
  onClick: () => void;
}

export default function CountryItem({
  number,
  countryName,
  totalConfirmed,
  onClick,
}: Country): JSX.Element {
  return (
    <div className="country-item" onClick={onClick}>
      <div className="country-item-number">{number}</div>
      <div className="country-item-name">{countryName}</div>
      <div className="country-item-confirmed">{totalConfirmed}</div>
    </div>
  );
}
