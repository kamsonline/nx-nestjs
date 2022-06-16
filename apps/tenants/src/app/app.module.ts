import { Module } from '@nestjs/common';
import { CoreModule } from '@special/core';
import { HealthModule } from '@special/health';
import { ClientModule } from './clients/client.module';

@Module({
  imports: [HealthModule, ClientModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
