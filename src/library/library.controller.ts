import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  create(@Body() createLibraryDto: CreateLibraryDto) {
    return this.libraryService.create(createLibraryDto);
  }

  @Get()
  findAll() {
    return this.libraryService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.libraryService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateLibraryDto: UpdateLibraryDto) {
    return this.libraryService.update(name, updateLibraryDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.libraryService.remove(name);
  }
}
