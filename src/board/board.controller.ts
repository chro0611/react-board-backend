import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){
    }

    @Get("/")
    HelloWorld(){
        return this.boardService.HelloWorld();
    }

    @Post("/")
    HelloWorld2(){
        return this.boardService.HelloWorld();
    }

    @Put("/")
    HelloWorld3(){
        return this.boardService.HelloWorld();
    }

    @Delete("/")
    HelloWorld4(){
        return this.boardService.HelloWorld();
    }
}
