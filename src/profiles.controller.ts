import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  //GET /profiles/:id
  //POST /profiles
  // PUT /profiles/:id
  // DELETE /profiles:id
}
