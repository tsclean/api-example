import {applyDecorators, AccessResource} from "@tsclean/core";
import {JwtAdapter} from "@/infrastructure/driven-adapters/adapters/jwt-adapter";

export function Auth(roles: string[]) {
    return applyDecorators(AccessResource(new JwtAdapter(roles)));
}
