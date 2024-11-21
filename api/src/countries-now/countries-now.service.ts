import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import {
  CountriesNowFlagImageRequestDto,
  CountriesNowPopulationDataRequestDto,
} from './dto/countries-now-request.dto';

@Injectable()
export class CountriesNowService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('COUNTRIES_NOW_BASE_URL');
  }

  async getCountryPopulation(data: CountriesNowPopulationDataRequestDto) {
    const url = `${this.baseUrl}/countries/population`;
    try {
      const response = await lastValueFrom(this.httpService.post(url, data));
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch country population: ${error.message}`);
    }
  }

  async getCountryFlagImage(data: CountriesNowFlagImageRequestDto) {
    const url = `${this.baseUrl}/countries/flag/images`;
    try {
      const response = await lastValueFrom(this.httpService.post(url, data));
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch country flag: ${error.message}`);
    }
  }
}
