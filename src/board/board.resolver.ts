import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Board } from 'src/models/board.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(of => Board)
export class BoardResolver {
    constructor(private prismaService : PrismaService){}

    @Query(returns => [Board])
    list(
        @Args('offset') offset: number,
        @Args('limit') limit : number
    ){
        return this.prismaService.board.findMany();
    }

    @Query(returns => Board)
    read(
        @Args('id') id : number
    ){
        return this.prismaService.board.findOne({
            where : {
                board_id : id
            }
        })
    }


    @Mutation(returns => String)
    async write(
        @Args('user_id') user_id : string,
        @Args('title') title : string,
        @Args('content') content : string
    ){
        let result = await this.prismaService.board.create({
            data : {
                user_id,
                title,
                content
            }
        })

        console.log(result);

        if(result)
        {
            return "success";
        }else
        {
            return "failed";
        }
    }

}
