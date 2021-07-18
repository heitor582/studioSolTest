import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, ArrayNotEmpty, IsArray } from 'class-validator';

export class RequestDTO {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ApiProperty({
    description: 'This is a list of number',
  })
  list: Array<number>;
}
