import { Module } from '@nestjs/common';
import { MaxSubArrayModule } from './modules/max-sub-array/max-sub-array.module';
@Module({
  imports: [MaxSubArrayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
