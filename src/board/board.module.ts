import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports : [PrismaModule],
    exports : [BoardService],
    providers: [BoardService, BoardResolver]
})
export class BoardModule {}
