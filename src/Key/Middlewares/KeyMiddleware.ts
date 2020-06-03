import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Model } from 'mongoose'
import { IKey } from "../Interfaces/key.interface";
import {InjectModel} from "@nestjs/mongoose";
import {BadRequestException} from "@nestjs/common"

@Injectable()
export class KeyMiddleware implements NestMiddleware {
    constructor(@InjectModel('Key') private keyModel: Model<IKey>) {}

    async use(req: Request, res: Response, next: Function) {
        const candidate = req.body.key;
        const findKey = await this.keyModel.find({key: candidate}).exec();
        if(findKey.length !== 0){
            throw new BadRequestException;
        } else {
            console.log("done");
            next();
        }


    }
}
