import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DateNagerService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('DATE_NAGER_BASE_URL');
  }

  async getAvailableCountries() {
    const url = `${this.baseUrl}/AvailableCountries`;
    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch holidays: ${error.message}`);
    }
  }

  async getCountryInfo(countryCode: string) {
    const url = `${this.baseUrl}/CountryInfo/${countryCode}`;
    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch holidays: ${error.message}`);
    }
  }
}
