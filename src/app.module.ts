import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesController } from './profiles/profiles.controller';
import { ProfilesService } from './profiles/profiles.service';

@Module({
  imports: [],
  controllers: [AppController, ProfilesController],
  providers: [AppService, ProfilesService],
})
export class AppModule {}
