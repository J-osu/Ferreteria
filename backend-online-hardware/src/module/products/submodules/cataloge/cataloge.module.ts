import { Module } from '@nestjs/common';
import { CatalogeService } from './cataloge.service';
import { CatalogeController } from './cataloge.controller';

@Module({
  controllers: [CatalogeController],
  providers: [CatalogeService],
})
export class CatalogeModule {}
