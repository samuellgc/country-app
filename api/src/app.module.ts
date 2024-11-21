import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DateNagerModule } from './date-nager/date-nager.module';
import { CountriesNowModule } from './countries-now/countries-now.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DateNagerModule,
    CountriesNowModule,
    CountriesModule,
  ],
})
export class AppModule {}
