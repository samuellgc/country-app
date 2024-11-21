import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { CountriesNowModule } from 'src/countries-now/countries-now.module';
import { DateNagerModule } from 'src/date-nager/date-nager.module';
import { DateNagerService } from 'src/date-nager/date-nager.service';
import { CountriesNowService } from 'src/countries-now/countries-now.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CountriesNowModule, DateNagerModule, HttpModule],
  controllers: [CountriesController],
  providers: [CountriesService, DateNagerService, CountriesNowService],
})
export class CountriesModule {}
