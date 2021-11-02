import {Controller, Get, Inject} from "@tsclean/core";
import {Auth} from "@/infrastructure/helpers/auth";
import {GET_USERS_SERVICE, IGetUsersService} from "@/domain/use-cases/get-users-service";

@Controller('api/v1/get-users')
export class GetUsersController {

    constructor(
        @Inject(GET_USERS_SERVICE) private readonly getUsersService: IGetUsersService
    ) {
    }

    @Get()
    @Auth(["guest"])
    async getUsersController(): Promise<any> {
        return await this.getUsersService.getUsersService();
    }
}
