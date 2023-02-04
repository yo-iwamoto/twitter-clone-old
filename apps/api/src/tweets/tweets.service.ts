import { Injectable } from '@nestjs/common';
import type { CreateTweetDto } from './dto/create-tweet.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TweetsService {
  constructor(private prisma: PrismaService) {}

  create(createTweetDto: CreateTweetDto) {
    return this.prisma.tweet.create({ data: createTweetDto });
  }

  findAll() {
    return this.prisma.tweet.findMany();
  }

  findOne(id: string) {
    return this.prisma.tweet.findUnique({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.tweet.delete({ where: { id } });
  }
}
