export const AUTHENTICATION_REPOSITORY = "AUTHENTICATION_REPOSITORY";

export interface IAuthenticationRepository {
    auth: (data: IAuthenticationRepository.Params) => Promise<IAuthenticationRepository.Result>;
}

export namespace IAuthenticationRepository {
    export type Params = {
        email: string;
        password: string
    }

    export type Result = {
        accessToken: string;
        name: string
    }
}