import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

import { RequestDTO } from './dtos/request.dto';
import { ResponseDTO } from './dtos/response.dto';
import { MaxSubArrayService } from './max-sub-array.service';

@Controller('maxsum')
export class MaxSubArrayController {
  constructor(private readonly maxSub: MaxSubArrayService) {}

  @Post()
  @ApiResponse({
    description: 'Return result of Max Sub Array',
    type: ResponseDTO,
  })
  @ApiBody({ type: [RequestDTO] })
  async sumSubArray(@Body() array: RequestDTO): Promise<ResponseDTO> {
    return await this.maxSub.sumSubArray(array);
  }
}
