import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './modules/artist/artist.module';
import { CommonModule } from './modules/common/common.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CommonModule, UserModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
