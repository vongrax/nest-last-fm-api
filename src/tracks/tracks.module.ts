import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksController } from './tracks.controller';
import { Track, TrackSchema } from './shemas/track.chema';
import { TracksService } from './track.service';

@Module({
  providers: [TracksService],
  controllers: [TracksController],
  imports: [MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }])],
})
export class TracksModule {}
