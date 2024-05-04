import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  artist: mongoose.Types.ObjectId;

  @Prop({ required: true })
  createdYear: string;

  @Prop({ default: null })
  cover: mongoose.Types.ObjectId;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
