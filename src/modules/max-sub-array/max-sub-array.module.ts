import { Module } from '@nestjs/common';
import { MaxSubArrayService } from './max-sub-array.service';
import { MaxSubArrayController } from './max-sub-array.controller';

@Module({
  providers: [MaxSubArrayService],
  controllers: [MaxSubArrayController],
})
export class MaxSubArrayModule {}
