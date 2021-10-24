import { UserModel } from '@/domain/models/user';
import { model, Schema } from "mongoose";

const schema = new Schema<UserModel>({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

export const UserModelSchema = model<UserModel>('users', schema);
