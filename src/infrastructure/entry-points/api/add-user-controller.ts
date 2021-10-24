import {Mapping, Get, Post, Body, Inject, Adapter} from "@tsclean/core";
import {AddUserParams} from "@/domain/models/user";
import {ADD_USER_SERVICE, IAddUserService} from "@/domain/use-cases/add-user-service";

@Mapping('api/v1/add-user')
export class AddUserController {

    constructor(
        @Adapter(ADD_USER_SERVICE) private readonly addUserService: IAddUserService
    ) {
    }

    @Post()
    async addUserController(@Body() data: AddUserParams): Promise<IAddUserService.Result | IAddUserService.Exist> {
        return this.addUserService.addUserService(data);
    }
}
