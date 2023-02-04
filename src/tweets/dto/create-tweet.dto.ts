import { ApiProperty } from '@nestjs/swagger';

export class CreateTweetDto {
  @ApiProperty()
  text: string;
}
