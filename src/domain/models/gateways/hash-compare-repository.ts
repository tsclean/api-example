export const HASH_COMPARE_REPOSITORY = "HASH_COMPARE_REPOSITORY";

export interface IHashCompare {
    compare: (text: string, verify: string) => Promise<boolean>
}