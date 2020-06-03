import { Field, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class KeyDto {
    @Field(() => String)
    readonly key: string;
    @Field(() => Int)
    readonly warehouse: number;
}