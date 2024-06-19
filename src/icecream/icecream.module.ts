import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IcecreamController } from './controllers/icecream/icecream.controller';
import { GetAllIcecreamService } from './services/icecream/get-all-icecreams.service';
import { SimpleMiddleware } from './middlewares/simple/simple.middleware';

@Module({
  controllers: [IcecreamController],
  providers: [GetAllIcecreamService],
})
export class IcecreamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SimpleMiddleware).forRoutes('icecream');
  }
}
