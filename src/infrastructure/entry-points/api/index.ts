import {AddUserController} from "@/infrastructure/entry-points/api/add-user-controller";
import {GetUsersController} from "@/infrastructure/entry-points/api/get-users-controller";
import {AuthenticationController} from "@/infrastructure/entry-points/api/authentication-controller";

export const controllers = [
    AddUserController,
    GetUsersController,
    AuthenticationController
]