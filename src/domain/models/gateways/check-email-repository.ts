export const CHECK_EMAIL_REPOSITORY = "CHECK_EMAIL_REPOSITORY";

export interface ICheckEmailRepository {
    checkEmail: (email: string) => Promise<ICheckEmailRepository.Result>
}

export namespace ICheckEmailRepository {
    export type Result = {
        id: string | number;
        firstName: string;
        password: string;
    }
    // export type Exist = boolean;
}