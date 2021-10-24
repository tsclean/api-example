export const LOAD_ACCOUNT_TOKEN_SERVICE = "LOAD_ACCOUNT_TOKEN_SERVICE";

export interface ILoadAccountTokenService {
    loadToken:(token: string) => Promise<ILoadAccountTokenService.Result>
}

export namespace ILoadAccountTokenService {
    export type Result = {
        id: string;
    }
}