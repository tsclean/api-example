export const HASH_REPOSITORY = "HASH_REPOSITORY";

export interface IHashRepository {
    hash: (text: string) => Promise<string>
}