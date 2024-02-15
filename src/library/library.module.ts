import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LibrarySchema } from 'src/Schema/library.Schema';
import { Library } from './entities/library.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: Library.name, schema: LibrarySchema }])],
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
