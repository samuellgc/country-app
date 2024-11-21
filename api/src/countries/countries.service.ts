import { Injectable } from '@nestjs/common';
import { CountriesNowService } from 'src/countries-now/countries-now.service';
import {
  CountriesNowFlagImageRequestDto,
  CountriesNowPopulationDataRequestDto,
} from 'src/countries-now/dto/countries-now-request.dto';
import { DateNagerService } from 'src/date-nager/date-nager.service';

@Injectable()
export class CountriesService {
  constructor(
    private readonly dateNagerService: DateNagerService,
    private readonly countriesNowService: CountriesNowService,
  ) {}

  async getCountries() {
    return this.dateNagerService.getAvailableCountries();
  }

  async getCountryInfo(countryCode: string) {
    return this.dateNagerService.getCountryInfo(countryCode);
  }

  async getCountryPopulation(data: CountriesNowPopulationDataRequestDto) {
    return this.countriesNowService.getCountryPopulation(data);
  }

  async getCountryFlagImage(data: CountriesNowFlagImageRequestDto) {
    return this.countriesNowService.getCountryFlagImage(data);
  }
}
