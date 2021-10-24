import {AddUserParams, UserModel} from "@/domain/models/user";
import {UserModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/user";
import {IAddUserRepository} from "@/domain/models/gateways/add-user-repository";
import {IGetUsersRepository} from "@/domain/models/gateways/get-users-repository";
import {ICheckEmailRepository} from "@/domain/models/gateways/check-email-repository";
import {IUpdateAccessTokenRepository} from "@/domain/models/gateways/update-access-token-repository";
import {ILoadAccountTokenRepository} from "@/domain/models/gateways/load-account-token-repository";
import mongoose from "mongoose";

export class UserMongooseRepositoryAdapter implements IAddUserRepository,
    IGetUsersRepository,
    ICheckEmailRepository,
    IUpdateAccessTokenRepository,
    ILoadAccountTokenRepository {

    map(data: any): any {
        const {_id, firstName, lastName, email, password} = data
        return Object.assign({}, {id: _id.toString(), firstName, lastName, email, password})
    }

    async addUserRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }

    async getUsersRepository(): Promise<UserModel[]> {
        return UserModelSchema.find();
    }

    async checkEmail(email: string): Promise<ICheckEmailRepository.Result> {
        const user = await UserModelSchema.findOne({email}).exec();
        return user && this.map(user);
    }

    async updateToken(id: string | number, token: string): Promise<void> {
        await UserModelSchema.updateOne({
                _id: id
            }, {
                $set: {
                    accessToken: token
                }
            }, {
                upsert: true
            }
        );
    }

    async loadToken(token: string): Promise<ILoadAccountTokenRepository.Result> {
        let objectFilter: {}
        objectFilter["_id"] = new mongoose.mongo.ObjectId(token)
        console.log(objectFilter)
        const result = await UserModelSchema.findOne(objectFilter);
        return this.map(result);
    }
}
