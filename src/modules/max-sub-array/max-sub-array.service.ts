import { BadRequestException, Injectable } from '@nestjs/common';
import { RequestDTO } from './dtos/request.dto';
import { ResponseDTO } from './dtos/response.dto';

@Injectable()
export class MaxSubArrayService {
  async sumSubArray(array: RequestDTO): Promise<ResponseDTO> {
    const { list } = array;
    if (!Array.isArray(list)) {
      throw new BadRequestException('List should be a array');
    }
    if (!list.length) {
      throw new BadRequestException("List can't be empty");
    }
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
      list[i] = Math.max(list[i], list[i] + list[i - 1]);
      result = Math.max(result, list[i]);
    }
    return { result };
  }
}
