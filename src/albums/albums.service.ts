import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/albums.schema';
import { Model } from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private albumsModel: Model<AlbumDocument>) {}

  async getAll(): Promise<Album[]> {
    return this.albumsModel.find().exec();
  }

  async getOne(id: string): Promise<Album> {
    return this.albumsModel.findById(id);
  }

  async createAlbum(album: CreateAlbumDto): Promise<Album> {
    const newAlbum = new this.albumsModel(album);
    return newAlbum.save();
  }

  async updateAlbum(album: CreateAlbumDto, id: string): Promise<Album> {
    return this.albumsModel.findByIdAndUpdate(id, album);
  }

  async removeAlbum(id: string): Promise<Album> {
    return this.albumsModel.findByIdAndDelete(id);
  }
}
