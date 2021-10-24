export const AUTHENTICATION_SERVICE = "AUTHENTICATION_SERVICE";

export interface IAuthenticationService {
    auth: (data: IAuthenticationService.Params) => Promise<IAuthenticationService.Result>;
}

export namespace IAuthenticationService {
    export type Params = {
        email: string;
        password: string
    }

    export type Result = {
        accessToken: string;
        name: string
    }
}