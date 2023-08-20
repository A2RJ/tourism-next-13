import { DefaultSession, DefaultUser } from "next-auth";
import { AccessToken, UserType } from "./types/user";

declare module "next-auth" {
    interface User extends DefaultUser { }
    interface Session {
        user: UserType & {
            access_token: AccessToken;
        },
        expires: Date
    }
}

declare module "next-auth/jwt" {
    interface JWT extends IUser { }
}
