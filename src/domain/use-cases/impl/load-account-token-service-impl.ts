import {Adapter, Service} from "@tsclean/core";
import {ILoadAccountTokenService} from "@/domain/use-cases/load-account-token-service";
import {
    ILoadAccountTokenRepository,
    LOAD_ACCOUNT_TOKEN_REPOSITORY
} from "@/domain/models/gateways/load-account-token-repository";
import {DECRYPT, IDecrypt} from "@/domain/use-cases/helpers/decrypt";

@Service()
export class LoadAccountTokenServiceImpl implements ILoadAccountTokenService {

    constructor(
        @Adapter(DECRYPT) private readonly decrypt: IDecrypt,
        @Adapter(LOAD_ACCOUNT_TOKEN_REPOSITORY) private readonly loadAccountTokenRepository: ILoadAccountTokenRepository
    ) {
    }

    async loadToken(token: string): Promise<ILoadAccountTokenService.Result> {
        let accessToken: string;

        try {
            accessToken = await this.decrypt.decrypt(token);
        } catch (e) {
            return null;
        }

        if (accessToken) {
            const account = await this.loadAccountTokenRepository.loadToken(accessToken["account"]);
            if (account) return account;
        }

        return null;
    }
}