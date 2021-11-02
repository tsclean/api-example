import {BcryptAdapter} from "@/infrastructure/driven-adapters/adapters/bcrypt-adapter";
import {UserMongooseRepositoryAdapter} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import {ADD_USER_REPOSITORY} from "@/domain/models/gateways/add-user-repository";
import {GET_USERS_REPOSITORY} from "@/domain/models/gateways/get-users-repository";
import {CHECK_EMAIL_REPOSITORY} from "@/domain/models/gateways/check-email-repository";
import {AddUserServiceImpl} from "@/domain/use-cases/impl/add-user-service-impl";
import {ADD_USER_SERVICE} from "@/domain/use-cases/add-user-service";
import {GetUsersServiceImpl} from "@/domain/use-cases/impl/get-users-service-impl";
import {GET_USERS_SERVICE} from "@/domain/use-cases/get-users-service";
import {UPDATE_ACCESS_TOKEN_REPOSITORY} from "@/domain/models/gateways/update-access-token-repository";
import {HASH_COMPARE_REPOSITORY} from "@/domain/models/gateways/hash-compare-repository";
import {AuthenticationServiceImpl} from "@/domain/use-cases/impl/authentication-service-impl";
import {AUTHENTICATION_SERVICE} from "@/domain/use-cases/authentication-service";
import {HASH_REPOSITORY} from "@/domain/models/gateways/hash-repository";
import {JwtAdapter} from "@/infrastructure/driven-adapters/adapters/jwt-adapter";
import {ENCRYPT_REPOSITORY} from "@/domain/models/gateways/encrypt-repository";
import {DECRYPT_REPOSITORY} from "@/domain/models/gateways/decryp-repositoryt";

export const adapters = [
    {
        provide: HASH_REPOSITORY,
        useClass: BcryptAdapter,

    },
    {
        provide: ADD_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
    {
        provide: GET_USERS_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
    {
        provide: CHECK_EMAIL_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
    {
        provide: UPDATE_ACCESS_TOKEN_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
    {
        provide: HASH_COMPARE_REPOSITORY,
        useClass: BcryptAdapter,
    },
    {
        provide: ENCRYPT_REPOSITORY,
        useClass: JwtAdapter,
    },
    {
        provide: DECRYPT_REPOSITORY,
        useClass: JwtAdapter,
    }
]

export const services = [
    {

        provide: ADD_USER_SERVICE,
        useClass: AddUserServiceImpl,
    },
    {

        provide: GET_USERS_SERVICE,
        useClass: GetUsersServiceImpl,
    },
    {

        provide: AUTHENTICATION_SERVICE,
        useClass: AuthenticationServiceImpl,
    }
]

