import { Schema as MongooseSchema, Types, model } from 'mongoose';

export enum PassionLevel {
    LOW,MEDIUM,HIGH,VERY_HIGH
}

export type HobbyType = {
    _id: Types.ObjectId,
    passion_level: keyof PassionLevel;
    name : string;
    year : number;
    createdAt? : Date;
    updatedAt? : Date;
}

const HobbySchema = new MongooseSchema<HobbyType>({
    passion_level  : {type : String,  required : true},
    name : {type : String, required : true, index : true},
    year : {type : Number, required : true, index : true},
}, {timestamps : true});

export default  model<HobbyType>("Hobby", HobbySchema);