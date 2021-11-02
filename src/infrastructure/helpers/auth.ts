import {applyDecorators, UseGuards} from "@tsclean/core";
import {JwtAdapter} from "@/infrastructure/driven-adapters/adapters/jwt-adapter";

export function Auth(roles: string[]) {
    return applyDecorators(UseGuards(new JwtAdapter(roles)));
}
