import {IAddUserService} from "@/domain/use-cases/add-user-service";
import {AddUserParams} from "@/domain/models/user";
import {ADD_USER_REPOSITORY, IAddUserRepository} from "@/domain/models/gateways/add-user-repository";
import {CHECK_EMAIL_REPOSITORY, ICheckEmailRepository} from "@/domain/models/gateways/check-email-repository";
import {HASH_REPOSITORY, IHashRepository} from "@/domain/models/gateways/hash-repository";
import {Inject, Injectable} from "@tsclean/core";

@Injectable()
export class AddUserServiceImpl implements IAddUserService {
    constructor(
        @Inject(HASH_REPOSITORY) private readonly hash: IHashRepository,
        @Inject(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
        @Inject(ADD_USER_REPOSITORY) private readonly addUserRepository: IAddUserRepository
    ) {
    }

    async addUserService(data: AddUserParams): Promise<IAddUserService.Result | IAddUserService.Exist> {
        const userExist = await this.checkEmailRepository.checkEmail(data.email);
        if (userExist) return true;

        const hashPassword = await this.hash.hash(data.password);
        const user = await this.addUserRepository.addUserRepository({...data, password: hashPassword});
        if (user) return user;
    }
}