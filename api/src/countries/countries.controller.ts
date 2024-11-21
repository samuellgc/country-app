import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CountriesService } from './countries.service';
import {
  CountriesNowFlagImageRequestDto,
  CountriesNowPopulationDataRequestDto,
} from 'src/countries-now/dto/countries-now-request.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getCountries() {
    return this.countriesService.getCountries();
  }

  @Post('population')
  async getCountryPopulation(
    @Body() data: CountriesNowPopulationDataRequestDto,
  ) {
    return this.countriesService.getCountryPopulation(data);
  }

  @Post('flag')
  async getCountryFlagImage(@Body() data: CountriesNowFlagImageRequestDto) {
    return this.countriesService.getCountryFlagImage(data);
  }

  @Get(':countryCode')
  async getCountryInfo(@Param('countryCode') countryCode: string) {
    return this.countriesService.getCountryInfo(countryCode);
  }
}
