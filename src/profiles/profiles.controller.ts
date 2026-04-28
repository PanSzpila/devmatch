import {
  Controller,
  Get,
  Query,
  Param,
  Body,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update.profile.dto';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  //GET /profiles/:id

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  //POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }

  // PUT /profiles/:id
  @Put()
  update(
    @Param('id') id: string,
    @Body() updateProfileDtoateProfileDto: UpdateProfileDto,
  ) {
    return {
      id,
      ...updateProfileDtoateProfileDto,
    };
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.OK) //domyślna zwrotka po delete to 204 - no content, a my tu chcemy 200 - ok
  remove(@Param('id') id: string) {}
}
