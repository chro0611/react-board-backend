import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BoardService } from './board/board.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private boardSerivce: BoardService
  ) 
  {}

  @Get()
  getHello(): string {
    return this.boardSerivce.HelloWorld();
  }
}
