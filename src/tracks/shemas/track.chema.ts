import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Album } from '../../albums/schemas/albums.schema';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop({ required: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Album.name })
  album: Types.ObjectId;

  @Prop({ required: true })
  duration: string;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
