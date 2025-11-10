import { Module } from '@nestjs/common';
import { OrderPCService } from './order_p_c.service';
import { OrderPCController } from './order_p_c.controller';
import { SearchFilterModule } from './submodules/search_filter/search_filter.module';

@Module({
  controllers: [OrderPCController],
  providers: [OrderPCService],
  imports: [SearchFilterModule],
})
export class OrderPCModule {}
