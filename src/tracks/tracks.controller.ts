import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TracksService } from './track.service';
import { Track } from './shemas/track.chema';
import { CreateTrackDto } from './dto/create-track.dto';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  getAllTracks(): Promise<Track[]> {
    return this.tracksService.getAll();
  }

  @Get(':id')
  getOneTrack(@Param('id') id: string): Promise<Track> {
    return this.tracksService.getOne(id);
  }

  @Post()
  createTrack(@Body() track: CreateTrackDto): Promise<Track> {
    return this.tracksService.createTrack(track);
  }

  @Put(':id')
  updateTrack(@Body() track: CreateTrackDto, @Param('id') id: string): Promise<Track> {
    return this.tracksService.updateTrack(id, track);
  }

  @Delete(':id')
  removeTrack(@Param('id') id: string): Promise<{ success: true }> {
    return this.tracksService.removeTrack(id);
  }
}
