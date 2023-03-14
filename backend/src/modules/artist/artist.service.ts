import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { getRandomSubset } from 'src/shared/utils/random.utils';
import { IGetAlbums } from '../../types/itunes-api.types';
import { artists } from './constants';

@Injectable()
export class ArtistService {
  constructor(private httpService: HttpService) {}

  async startGame() {
    const artist = getRandomSubset(artists, 1).at(0);
    const albums = await this.getAlbums(artist);

    return {
      artist,
      albums,
    };
  }

  async getAlbums(name: string) {
    const url = 'https://itunes.apple.com/search';
    const params = {
      media: 'music',
      entity: 'album',
      attribute: 'artistTerm',
      term: name,
    };

    const albums = await lastValueFrom(
      this.httpService.get<IGetAlbums>(url, { params }).pipe(
        map((response) => response.data.results),
        map((results) =>
          results.filter(
            (item) => item.artistName.toLowerCase() === name.toLowerCase(),
          ),
        ),
        map((albums) => albums.map((album) => album.collectionName)),
      ),
    );

    const randomAlbums = getRandomSubset(albums, 5);
    return randomAlbums;
  }
}
