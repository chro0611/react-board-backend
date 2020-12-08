import { Field, Int, ObjectType } from "@nestjs/graphql/dist";

@ObjectType()
export class Board{
    @Field(type => Int)
    board_id : number;

    @Field({ nullable: true })
    user_id? : string;

    @Field({ nullable: true })
    title? : string;

    @Field({ nullable: true })
    content? : string;
}