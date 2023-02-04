import { ApiProperty } from '@nestjs/swagger';
import type { Tweet } from '@prisma/client';

export class TweetEntity implements Tweet {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  createdAt: Date;
}
