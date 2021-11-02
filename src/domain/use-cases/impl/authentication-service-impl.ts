import {IAuthenticationService} from "@/domain/use-cases/authentication-service";
import {CHECK_EMAIL_REPOSITORY, ICheckEmailRepository} from "@/domain/models/gateways/check-email-repository";
import {HASH_COMPARE_REPOSITORY, IHashCompare} from "@/domain/models/gateways/hash-compare-repository";
import {
    IUpdateAccessTokenRepository,
    UPDATE_ACCESS_TOKEN_REPOSITORY
} from "@/domain/models/gateways/update-access-token-repository";
import {ENCRYPT_REPOSITORY, IEncrypt} from "@/domain/models/gateways/encrypt-repository";
import {Inject, Injectable} from "@tsclean/core";

@Injectable()
export class AuthenticationServiceImpl implements IAuthenticationService {
    constructor(
        @Inject(ENCRYPT_REPOSITORY) private readonly encrypt: IEncrypt,
        @Inject(HASH_COMPARE_REPOSITORY) private readonly hashCompare: IHashCompare,
        @Inject(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
        // @Adapter(UPDATE_ACCESS_TOKEN_REPOSITORY) private readonly updateAccessTokenRepository: IUpdateAccessTokenRepository
    ) {
    }

    async auth(data: IAuthenticationService.Params): Promise<IAuthenticationService.Result> {
        const account = await this.checkEmailRepository.checkEmail(data.email);
        const isValid = await this.hashCompare.compare(data.password, account.password);
        if (isValid) {
            const accessToken = await this.encrypt.encrypt(account.id, account.roles);
            // await this.updateAccessTokenRepository.updateToken(account.id, accessToken);
            return {
                accessToken,
                name: account.firstName
            }
        }

        return null;
    }
}