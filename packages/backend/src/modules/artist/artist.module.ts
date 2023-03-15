import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ArtistController } from './artist.contoller';
import { ArtistService } from './artist.service';

@Module({
  imports: [HttpModule],
  controllers: [ArtistController],
  providers: [ArtistService],
  exports: [ArtistService],
})
export class ArtistModule {}
