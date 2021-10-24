import bcrypt from "bcrypt";
import {IEncrypt} from "@/domain/use-cases/helpers/encrypt";
import {IHashCompare} from "@/domain/use-cases/helpers/hash-compare";

export class BcryptAdapter implements IEncrypt, IHashCompare {
    private readonly salt: number = 12;

    constructor() {
    }

    async encrypt(text: string | Buffer): Promise<IEncrypt.Result> {
        return await bcrypt.hash(text, this.salt);
    }

    async compare(text: string, verify: string): Promise<boolean> {
        return await bcrypt.compare(text, verify);
    }
}