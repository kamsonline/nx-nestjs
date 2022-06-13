import { Module } from '@nestjs/common';
import { CoreModule } from '@special/core';
import { HealthModule } from '@special/health';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HealthModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
