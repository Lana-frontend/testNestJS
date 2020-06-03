import { Injectable } from '@nestjs/common';
import {  InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { IKey } from "./Interfaces/key.interface";
import { KeyDto } from "./DTO/key.dto";

@Injectable()
export class KeyService {
    constructor(@InjectModel('Key') private keyModel: Model<IKey>) {}

    async findAll(): Promise<IKey[]> {
        return this.keyModel.find().exec();
    }

    async addKey(keyDto: KeyDto): Promise<IKey | string> {
        const createKey = new this.keyModel(keyDto);
        return await createKey.save()
    }
}
