import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardController } from './board/board.controller';
import { BoardModule } from './board/board.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    BoardModule,
    GraphQLModule.forRoot({
      autoSchemaFile : join(process.cwd(), 'schema.graphql'),
    }),
    PrismaModule,

  ],
  controllers: [AppController, BoardController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
