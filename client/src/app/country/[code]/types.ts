export interface PopulationCounts {
  year: number;
  value: number;
}

export interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export interface ICountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
  flag: string;
  populationCounts: PopulationCounts[];
}
