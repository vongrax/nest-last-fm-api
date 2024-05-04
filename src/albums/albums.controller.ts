import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { Album } from './schemas/albums.schema';
import { CreateAlbumDto } from './dto/create-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  getAllAlbums(): Promise<Album[]> {
    return this.albumsService.getAll();
  }

  @Get(':id')
  getAlbum(@Param('id') id: string): Promise<Album> {
    return this.albumsService.getOne(id);
  }

  @Post()
  createAlbum(@Body() album: CreateAlbumDto): Promise<Album> {
    return this.albumsService.createAlbum(album);
  }

  @Put(':id')
  updateAlbum(@Body() album: CreateAlbumDto, @Param('id') id: string): Promise<Album> {
    return this.albumsService.updateAlbum(album, id);
  }

  @Get(':id')
  removeAlbum(@Param('id') id: string): Promise<Album> {
    return this.albumsService.removeAlbum(id);
  }
}
