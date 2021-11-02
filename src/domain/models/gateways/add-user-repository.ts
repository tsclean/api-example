import {AddUserParams, UserModel, UserRoleModel} from "@/domain/models/user";

export const ADD_USER_REPOSITORY = "ADD_USER_REPOSITORY";

export interface IAddUserRepository {
    addUserRepository: (data: AddUserParams) => Promise<IAddUserRepository.Result>
}

export namespace IAddUserRepository {
    export  type Result = {
        id?: string | number;
        firstName: string;
        lastName: string;
        email: string;
        roles: UserRoleModel[]
    }
}