import { TaskService } from './task.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [TaskService],
})
export class TaskModule {}
