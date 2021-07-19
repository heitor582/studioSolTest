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
    let result = list[0]; // Apropria o valor resultado para o primeiro item do array
    // Como sempre soma o index com o index anterior para não dar um valor -1 começa com o index 1
    for (let i = 1; i < list.length; i++) {
      list[i] = Math.max(list[i], list[i] + list[i - 1]); // Substitui o valor atual pelo maior comparado com ele proprio ou a soma dele com o anterior
      result = Math.max(result, list[i]); // Substitui o result pela comparação do proprio por o maior valor entre o index atual e o proprio result
    }
    return { result }; // retorna em forma de objeto {result: result}
  }
}
