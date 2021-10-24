import {Adapter, Service} from "@tsclean/core";
import {IAddUserService} from "@/domain/use-cases/add-user-service";
import {AddUserParams} from "@/domain/models/user";
import {ENCRYPT, IEncrypt} from "@/domain/use-cases/helpers/encrypt";
import {ADD_USER_REPOSITORY, IAddUserRepository} from "@/domain/models/gateways/add-user-repository";
import {CHECK_EMAIL_REPOSITORY, ICheckEmailRepository} from "@/domain/models/gateways/check-email-repository";

@Service()
export class AddUserServiceImpl implements IAddUserService {
    constructor(
        @Adapter(ENCRYPT) private readonly encrypt: IEncrypt,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
        @Adapter(ADD_USER_REPOSITORY) private readonly addUserRepository: IAddUserRepository
    ) {
    }

    async addUserService(data: AddUserParams): Promise<IAddUserService.Result | IAddUserService.Exist> {
        const userExist = await this.checkEmailRepository.checkEmail(data.email);
        if (userExist) return true;

        const encryptPassword = await this.encrypt.encrypt(data.password);
        const user = await this.addUserRepository.addUserRepository({...data, password: encryptPassword, accessToken: ""});
        if (user) return user;
    }
}