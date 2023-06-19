import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { baseAPIURL } from "./fecthAPI";
import { signJWT } from "./jwt";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
                const user = { id: "1", name: "Admin", email: "admin@admin.com" };
                if (credentials.email != user.email) {
                    throw new Error("Invalid email or password");
                }
                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        // sign In -> jwt -> session
        async signIn({ account, profile, user }) {
            return true;
        },
        jwt: async ({ token, user }) => {
            try {
                if (user) {
                    const tokenJwt = await signJWT(
                        JSON.stringify({
                            name: user.name,
                            email: user.email,
                        }),
                        "1d"
                    );
                    const result = await fetch(`${baseAPIURL}/auth/callback`, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${tokenJwt}`,
                        },
                    });
                    const resultJson = await result.json();
                    if (!result.ok) {
                        throw resultJson;
                    }

                    return {
                        ...token,
                        access_token: resultJson.access_token,
                    };
                }
                return token;
            } catch (error) {
                throw error;
            }
        },
        session: ({ session, token }) => {
            console.log("Session Callback");
            return {
                ...session,
                user: {
                    ...session.user,
                    access_token: token.access_token,
                },
            };
        },
    },
};
