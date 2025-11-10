import { Module } from '@nestjs/common';
import { SearchFilterService } from './search_filter.service';
import { SearchFilterController } from './search_filter.controller';

@Module({
  controllers: [SearchFilterController],
  providers: [SearchFilterService],
})
export class SearchFilterModule {}
