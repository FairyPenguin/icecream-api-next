import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IcecreamModule } from './icecream/icecream.module';

@Module({
  imports: [IcecreamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
