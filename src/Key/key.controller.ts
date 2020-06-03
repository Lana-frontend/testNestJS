import { Controller, Get, Post, Body } from '@nestjs/common';
import { KeyService } from './key.service';
import {IKey} from "./Interfaces/key.interface";
import {KeyDto} from "./DTO/key.dto";

@Controller()
export class KeyController {
    constructor(private readonly keyService: KeyService) {}

    @Get()
    findAll(): Promise<IKey[]> {
        return this.keyService.findAll();
    }

    @Post("/test")
    addKey(@Body() KeyDto: KeyDto): Promise<IKey | string> {
            return this.keyService.addKey(KeyDto)
    }
}
