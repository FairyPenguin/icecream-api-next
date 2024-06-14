import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateFlavorDto } from 'src/icecream/dtos/CreateFlavor.dto';

@Controller('icecream')
export class IcecreamController {
  @Get('list')
  getIceCreamList() {
    return ['blueberry', 'pomegranate'];
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
