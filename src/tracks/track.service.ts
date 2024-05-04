import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Track, TrackDocument } from './shemas/track.chema';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Album, AlbumDocument } from '../albums/schemas/albums.schema';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
  ) {}

  async getAll(): Promise<Track[]> {
    try {
      return await this.trackModel.find().exec();
    } catch (err) {
      throw new err();
    }
  }

  async getOne(id: string): Promise<Track> {
    return this.trackModel.findById(id);
  }

  async createTrack(track: CreateTrackDto): Promise<Track> {
    const newTrack = new this.trackModel(track);
    const album = this.albumModel.findById(track.album);
    try {
      if (album) {
        return await newTrack.save();
      }
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async updateTrack(id: string, track: UpdateTrackDto): Promise<Track> {
    return this.trackModel.findByIdAndUpdate(id, track);
  }

  async removeTrack(id: string): Promise<{ success: true }> {
    await this.trackModel.findByIdAndDelete(id);
    return { success: true };
  }
}
