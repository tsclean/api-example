export const HASH_COMPARE = "HASH_COMPARE";

export interface IHashCompare {
    compare: (text: string, verify: string) => Promise<boolean>
}