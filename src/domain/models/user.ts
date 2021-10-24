export type UserModel = {
    id?: string | number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    accessToken?: string;
}

export type AddUserParams = Omit<UserModel, 'id'>
