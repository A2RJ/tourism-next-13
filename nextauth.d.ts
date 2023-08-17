import { DefaultSession, DefaultUser } from "next-auth";

type AccessToken = {
    type: string;
    token: string;
    expires_at: string;
};

declare module "next-auth" {
    interface User extends DefaultUser { }
    interface Session {
        user: {
            id: string
            name: string
            email: string
            access_token: AccessToken;
        },
        expires: Date
    }
}

declare module "next-auth/jwt" {
    interface JWT extends IUser { }
}
