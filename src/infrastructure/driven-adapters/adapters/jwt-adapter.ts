import jwt from "jsonwebtoken";
import {IDecrypt} from "@/domain/use-cases/helpers/decrypt";

const secret = "my_secret";

export class JwtAdapter implements IDecrypt {
    async decrypt(cipher: string): Promise<IDecrypt.Result | any> {
        return jwt.verify(cipher, secret);
    }
}