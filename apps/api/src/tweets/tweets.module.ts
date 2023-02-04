import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
