export const UPDATE_ACCESS_TOKEN_REPOSITORY = "UPDATE_ACCESS_TOKEN_REPOSITORY";

export interface IUpdateAccessTokenRepository {
    updateToken: (id: string | number, token: string) => Promise<void>;
}