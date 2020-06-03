import * as mongoose from "mongoose";

export const KeySchema = new mongoose.Schema({
    key: { type: String, required: true },
    warehouse: {type: Number, required: true}
});

KeySchema.index({key: 1}, {unique: true});