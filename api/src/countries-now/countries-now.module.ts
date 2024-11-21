import { Module } from '@nestjs/common';
import { CountriesNowService } from './countries-now.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CountriesNowService],
})
export class CountriesNowModule {}
