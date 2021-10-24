import {Mapping, Inject, Post, Body, Adapter} from "@tsclean/core";
import {AUTHENTICATION_SERVICE, IAuthenticationService} from "@/domain/use-cases/authentication-service";

@Mapping('api/v1/authentication')
export class AuthenticationController {

    constructor(
        @Adapter(AUTHENTICATION_SERVICE)
        private readonly authenticationService: IAuthenticationService
    ) {
    }

    @Post()
    async authController(@Body() data: IAuthenticationService.Params): Promise<IAuthenticationService.Result> {
        const result = await this.authenticationService.auth(data);
        return {
            accessToken: result.accessToken,
            name: result.name
        }
    }

}
