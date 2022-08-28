export type TRequestFormPayload = {
    login: string,
    password: string
}

export interface IAuth {
    accessToken: string;
    refreshToken: string;
}

export interface IUser {
    login: string;
}
