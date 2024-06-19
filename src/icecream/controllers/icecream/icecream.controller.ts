import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateFlavorDto } from 'src/icecream/dtos/CreateFlavor.dto';
import { GetAllIcecreamService } from 'src/icecream/services/icecream/get-all-icecreams.service';

@Controller('icecream')
export class IcecreamController {
  constructor(private getALlIcecream: GetAllIcecreamService) {}

  @Get('list')
  getIceCreamList() {
    // return ['blueberry', 'pomegranate'];
    console.log(this.getALlIcecream.FlavorsList(), 'Controller');
    return this.getALlIcecream.FlavorsList();
  }

  //route param
  @Get(':id')
  getFlavorById(@Param('id', ParseIntPipe) id: number) {
    this.getFlavorById(id);
  }

  //query param
  @Get()
  getFlavorByOrigin(
    @Query('name') name: string,
    @Query('origin') origin: string,
  ) {
    console.log(name);
    console.log(origin);
    const filtredByOrigin = this.getALlIcecream
      .FlavorsList()
      .filter((flavor) => {
        return flavor.origin === origin;
      });

    return filtredByOrigin;
  }

  @Get('new-flavors')
  getNewIceCreamFlavors() {
    return ['Lemon'];
  }

  @Post('create-new-flavor')
  @UsePipes(new ValidationPipe())
  createNewFlavor(
    @Body() flavorPaylaod: CreateFlavorDto,
    @Res() response: Response,
  ) {
    const requestBody = flavorPaylaod;
    console.log(requestBody.origin);

    return response.json({ requestBody });
  }
}
