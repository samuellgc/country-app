import { IsString } from 'class-validator';

export class CountriesNowPopulationDataRequestDto {
  @IsString()
  country: string;
}

export class CountriesNowFlagImageRequestDto {
  @IsString()
  iso2: string;
}
