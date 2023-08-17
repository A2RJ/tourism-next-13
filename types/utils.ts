export type AccessToken = {
    type: string;
    token: string;
    expires_at: string;
};

export type User = {
    name: string;
    email: string;
    image: string;
    access_token: AccessToken;
};

export type UserType = {
    user?: User;
    expires?: string;
};


export type queryParamsType = {
    page?: number;
    per_page?: number;
    keyword?: string
};