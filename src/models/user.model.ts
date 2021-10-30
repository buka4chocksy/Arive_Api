import { Schema as MongooseSchema, Types, model } from 'mongoose';

export type UserType = {
    _id: Types.ObjectId,
    name: string;
    hobbies: Types.ObjectId[]
}


const UserSchema = new MongooseSchema({
    name: { type: String, required: true, index: true },
    hobbies: [{ type: Types.ObjectId, ref: 'Hobby', index: true }]
});

export default model<UserType>("User", UserSchema);