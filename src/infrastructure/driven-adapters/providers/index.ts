import {BcryptAdapter} from "@/infrastructure/driven-adapters/adapters/bcrypt-adapter";
import {ENCRYPT} from "@/domain/use-cases/helpers/encrypt";
import {UserMongooseRepositoryAdapter} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import {ADD_USER_REPOSITORY} from "@/domain/models/gateways/add-user-repository";
import {GET_USERS_REPOSITORY} from "@/domain/models/gateways/get-users-repository";
import {CHECK_EMAIL_REPOSITORY} from "@/domain/models/gateways/check-email-repository";
import {AddUserServiceImpl} from "@/domain/use-cases/impl/add-user-service-impl";
import {ADD_USER_SERVICE} from "@/domain/use-cases/add-user-service";
import {GetUsersServiceImpl} from "@/domain/use-cases/impl/get-users-service-impl";
import {GET_USERS_SERVICE} from "@/domain/use-cases/get-users-service";
import {UPDATE_ACCESS_TOKEN_REPOSITORY} from "@/domain/models/gateways/update-access-token-repository";
import {HASH_COMPARE} from "@/domain/use-cases/helpers/hash-compare";
import {AuthenticationServiceImpl} from "@/domain/use-cases/impl/authentication-service-impl";
import {AUTHENTICATION_SERVICE} from "@/domain/use-cases/authentication-service";

export const adapters = [
    {
        classAdapter: BcryptAdapter,
        key: ENCRYPT
    },
    {
        classAdapter: UserMongooseRepositoryAdapter,
        key: ADD_USER_REPOSITORY
    },
    {
        classAdapter: UserMongooseRepositoryAdapter,
        key: GET_USERS_REPOSITORY
    },
    {
        classAdapter: UserMongooseRepositoryAdapter,
        key: CHECK_EMAIL_REPOSITORY
    },
    {
        classAdapter: UserMongooseRepositoryAdapter,
        key: UPDATE_ACCESS_TOKEN_REPOSITORY
    },
    {
        classAdapter: BcryptAdapter,
        key: HASH_COMPARE
    }
]

export const services = [
    {
        classAdapter: AddUserServiceImpl,
        key: ADD_USER_SERVICE
    },
    {
        classAdapter: GetUsersServiceImpl,
        key: GET_USERS_SERVICE
    },
    {
        classAdapter: AuthenticationServiceImpl,
        key: AUTHENTICATION_SERVICE
    }
]

