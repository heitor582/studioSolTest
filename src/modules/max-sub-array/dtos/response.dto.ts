import { ApiProperty } from '@nestjs/swagger';

export class ResponseDTO {
  @ApiProperty({
    description: 'This is a result of Max Sub Array',
  })
  result: number;
}
