export const DECRYPT_REPOSITORY = "DECRYPT_REPOSITORY";

export interface IDecrypt {
    decrypt: (cipher: string) => Promise<IDecrypt.Result>
}

export namespace IDecrypt {
    export type Result = string;
}