import { Document } from "mongoose";

export interface IKey extends Document{
    readonly key: string;
    readonly warehouse: number;
    
}