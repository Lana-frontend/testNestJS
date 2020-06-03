import {Query, Resolver, Mutation} from "@nestjs/graphql";
import { KeyService } from './key.service'
import {KeyDto} from "./DTO/key.dto";

@Resolver()
export class KeyResolver {
    constructor(
        private keyService: KeyService,
    ) {}

    @Query(() => String)
    async hello() {
        return "hello"
    }

    @Query(()=> [KeyDto])
    async keys() {
        return this.keyService.findAll()
    }

    @Mutation(()=> [KeyDto])
    async add_key(KeyDto: KeyDto){
        return this.keyService.addKey(KeyDto)
    }
}