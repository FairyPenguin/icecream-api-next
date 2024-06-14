import { Module } from '@nestjs/common';
import { IcecreamController } from './controllers/icecream/icecream.controller';

@Module({
  controllers: [IcecreamController],
})
export class IcecreamModule {}
