export interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface CountryItemProps {
  key: string;
  number: number;
  countryName: string;
  totalConfirmed: number;
  onClick: () => void;
}

export interface ModalProps {
  onClose: () => void;
  countryName: string;
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
}
