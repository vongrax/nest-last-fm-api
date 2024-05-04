import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist, ArtistDocument } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<ArtistDocument>) {}

  async getAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }

  async getOne(id: string): Promise<Artist> {
    return this.artistModel.findById(id);
  }

  async createArtist(artist: CreateArtistDto): Promise<Artist> {
    const newAlbum = new this.artistModel(artist);
    return newAlbum.save();
  }

  async updateArtist(id: string, artist: UpdateArtistDto): Promise<Artist> {
    return this.artistModel.findByIdAndUpdate(id, artist);
  }

  async removeArtist(id: string): Promise<{ success: true }> {
    await this.artistModel.findByIdAndDelete(id);
    return { success: true };
  }
}
