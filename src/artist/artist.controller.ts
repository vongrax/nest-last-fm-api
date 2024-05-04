import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getAll(): Promise<Artist[]> {
    return this.artistService.getAll();
  }

  @Get(':id')
  getArtist(@Param('id') id: string): Promise<Artist> {
    return this.artistService.getOne(id);
  }

  @Post()
  createArtist(@Body() artist: CreateArtistDto): Promise<Artist> {
    return this.artistService.createArtist(artist);
  }

  @Put(':id')
  updateArtist(@Body() artist: CreateArtistDto, @Param('id') id: string): Promise<Artist> {
    return this.artistService.updateArtist(id, artist);
  }

  @Delete(':id')
  removeArtist(@Param('id') id: string): Promise<{ success: true }> {
    return this.artistService.removeArtist(id);
  }
}
