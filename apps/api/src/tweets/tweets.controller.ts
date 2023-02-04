import { CreateTweetDto } from './dto/create-tweet.dto';
import { TweetEntity } from './entities/tweet.entity';
import { TweetsService } from './tweets.service';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Controller('tweets')
@ApiTags('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  @ApiOperation({ operationId: 'create-tweet' })
  @ApiCreatedResponse({ type: TweetEntity })
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.create(createTweetDto);
  }

  @Get()
  @ApiOperation({ operationId: 'list-tweet' })
  @ApiOkResponse({ type: TweetEntity, isArray: true })
  findAll() {
    return this.tweetsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ operationId: 'get-tweet' })
  @ApiOkResponse({ type: TweetEntity })
  @ApiNotFoundResponse({ schema: { type: 'object', properties: { code: { type: 'string' } } } })
  async findOne(@Param('id') id: string, @Res() rep: FastifyReply) {
    const tweet = await this.tweetsService.findOne(id);
    if (tweet === null) {
      return rep.status(404).send({ code: 'not-found' });
    }

    return rep.send({ tweet });
  }

  @Delete(':id')
  @ApiOperation({ operationId: 'delete-tweet' })
  remove(@Param('id') id: string) {
    return this.tweetsService.remove(id);
  }
}
