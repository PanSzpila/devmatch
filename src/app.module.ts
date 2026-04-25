import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesController } from './profiles.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfilesController],
  providers: [AppService],
})
export class AppModule {}
