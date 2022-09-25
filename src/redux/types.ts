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

export type TPost = {
    title: string,
    description: string,
    id: string,
    userId: string
}
