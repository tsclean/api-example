export const DECRYPT = "DECRYPT";

export interface IDecrypt {
    decrypt: (cipher: string) => Promise<IDecrypt.Result>
}

export namespace IDecrypt {
    export type Result = string;
}