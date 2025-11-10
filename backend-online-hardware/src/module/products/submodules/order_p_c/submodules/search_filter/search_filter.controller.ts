import { Controller } from '@nestjs/common';
import { SearchFilterService } from './search_filter.service';

@Controller('search-filter')
export class SearchFilterController {
  constructor(private readonly searchFilterService: SearchFilterService) {}
}
