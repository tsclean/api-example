import {IGetUsersService} from "@/domain/use-cases/get-users-service";
import {UserModel} from "@/domain/models/user";
import {GET_USERS_REPOSITORY, IGetUsersRepository} from "@/domain/models/gateways/get-users-repository";
import {Adapter, Service} from "@tsclean/core";

@Service()
export class GetUsersServiceImpl implements IGetUsersService {
    constructor(
        @Adapter(GET_USERS_REPOSITORY) private readonly getUsersRepository: IGetUsersRepository
    ) {
    }

    async getUsersService(): Promise<UserModel[]> {
        return await this.getUsersRepository.getUsersRepository();
    }
}