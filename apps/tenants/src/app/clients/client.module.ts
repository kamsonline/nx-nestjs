import { Module } from '@nestjs/common';
import { CoreModule } from '@special/core';
import { HealthModule } from '@special/health';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientRepository } from './client.repository';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
})
export class ClientModule {}
