import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LibraryDocument = Library & Document;

@Schema()
export class Library {
  @Prop()
  name: string;
  @Prop()
  author: string;
  @Prop()
  publication : string
}

export const LibrarySchema = SchemaFactory.createForClass(Library);