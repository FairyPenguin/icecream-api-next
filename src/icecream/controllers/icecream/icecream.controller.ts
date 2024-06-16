import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateFlavorDto } from 'src/icecream/dtos/CreateFlavor.dto';
import * as IceCreamFlavoes from '../../../data/flavors.json';

@Controller('icecream')
export class IcecreamController {
  flavors = IceCreamFlavoes.flavors.map((flavor) => {
    return {
      id: flavor.id,
      name: flavor.flavorName,
      origin: flavor.origin,
    };
  });

  @Get('list')
  getIceCreamList() {
    // return ['blueberry', 'pomegranate'];
    return this.flavors;
  }

  //route param
  @Get(':id')
  getFlavorById(@Param('id') id: string) {
    const filtredById = IceCreamFlavoes.flavors.filter((flavor) => {
      return flavor.id === parseInt(id);
    });

    console.log(typeof id);

    return filtredById;
  }

  //query param
  @Get()
  getFlavorByOrigin(
    @Query('name') name: string,
    @Query('origin') origin: string,
  ) {
    console.log(name);
    console.log(origin);
    const filtredByOrigin = IceCreamFlavoes.flavors.filter((flavor) => {
      return flavor.origin === origin;
    });

    return filtredByOrigin;
  }

  @Get('new-flavors')
  getNewIceCreamFlavors() {
    return ['Lemon'];
  }

  @Post('create-new-flavor')
  createNewFlavor(
    @Body() flavorPaylaod: CreateFlavorDto,
    @Res() response: Response,
  ) {
    const requestBody = flavorPaylaod;
    console.log(requestBody.origin);

    return response.json({ requestBody });
  }
}
