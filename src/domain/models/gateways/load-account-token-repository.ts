export const LOAD_ACCOUNT_TOKEN_REPOSITORY = "LOAD_ACCOUNT_TOKEN_REPOSITORY";

export interface ILoadAccountTokenRepository {
    loadToken: (token: string) => Promise<ILoadAccountTokenRepository.Result>
}

export namespace ILoadAccountTokenRepository {
    export type Result = {
        id: string,
        roles: []
    }
}