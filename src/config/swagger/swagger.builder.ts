import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Backend test for Studio Sol')
  .setDescription(
    'This api consists in resolution for Maximum subarray problem',
  )
  .setVersion('1.0.0')
  .build();
