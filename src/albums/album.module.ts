import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './schemas/albums.schema';

@Module({
  providers: [AlbumsService],
  controllers: [AlbumsController],
  imports: [MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }])],
})
export class AlbumModule {}
