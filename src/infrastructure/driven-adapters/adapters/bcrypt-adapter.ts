import bcrypt from "bcrypt";
import {IHashCompare} from "@/domain/models/gateways/hash-compare-repository";
import {IHashRepository} from "@/domain/models/gateways/hash-repository";

export class BcryptAdapter implements IHashRepository, IHashCompare {
    private readonly salt: number = 12;

    constructor() {
    }

    async compare(text: string, verify: string): Promise<boolean> {
        return await bcrypt.compare(text, verify);
    }

    async hash(text: string): Promise<string> {
        return await bcrypt.hash(text, this.salt);
    }
}