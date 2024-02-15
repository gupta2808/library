import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Library } from './entities/library.entity';



@Injectable()
export class LibraryService {
  constructor(@InjectModel(Library.name) private libraryModel: Model<Library>) {}

  async create(createLibraryDto: CreateLibraryDto): Promise<Library>{
    return new this.libraryModel(createLibraryDto).save();
  }

  findAll() {
    return this.libraryModel.find() ;
  }

  findOne(name: string) {
    return this.libraryModel.findOne({name}) ;
  }

  update(name: string, updateLibraryDto: UpdateLibraryDto) {
    return this.libraryModel.updateOne({name}, {$set:{...updateLibraryDto}});
  }

  remove(name: String) {
    return this.libraryModel.deleteOne({name});
  }
}
