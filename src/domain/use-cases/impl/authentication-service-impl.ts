import {Adapter, Service} from "@tsclean/core";
import {IAuthenticationService} from "@/domain/use-cases/authentication-service";
import {CHECK_EMAIL_REPOSITORY, ICheckEmailRepository} from "@/domain/models/gateways/check-email-repository";
import {HASH_COMPARE, IHashCompare} from "@/domain/use-cases/helpers/hash-compare";
import {
    IUpdateAccessTokenRepository,
    UPDATE_ACCESS_TOKEN_REPOSITORY
} from "@/domain/models/gateways/update-access-token-repository";
import {ENCRYPT, IEncrypt} from "@/domain/use-cases/helpers/encrypt";

@Service()
export class AuthenticationServiceImpl implements IAuthenticationService {
    constructor(
        @Adapter(ENCRYPT) private readonly encrypt: IEncrypt,
        @Adapter(HASH_COMPARE) private readonly hashCompare: IHashCompare,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
        @Adapter(UPDATE_ACCESS_TOKEN_REPOSITORY) private readonly updateAccessTokenRepository: IUpdateAccessTokenRepository
    ) {
    }

    async auth(data: IAuthenticationService.Params): Promise<IAuthenticationService.Result> {
        const account = await this.checkEmailRepository.checkEmail(data.email);
        const isValid = await this.hashCompare.compare(data.password, account.password);
        if (isValid) {
            const accessToken = await this.encrypt.encrypt(account.id);
            await this.updateAccessTokenRepository.updateToken(account.id, accessToken);
            return {
                accessToken,
                name: account.firstName
            }
        }

        return null;
    }
}