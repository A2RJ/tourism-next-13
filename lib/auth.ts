import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { baseAPIURL } from "./fecthAPI";
import { signJWT } from "./jwt";
import axios from "axios";

interface ErrorResponse {
    errors: ErrorDetail[];
}

interface ErrorDetail {
    message: string;
    field?: string;
    email?: string;
}

interface MessageResponse {
    message: string;
}

interface User {
    access_token?: string;
    name: string;
    email: string;
}

function convertToQueryParams(response: ErrorResponse | MessageResponse): string {
    let queryParams = '';

    if ('errors' in response) {
        const errorMessage = response.errors[0].message;
        queryParams += `${encodeURIComponent(errorMessage)}`;
    } else if ('message' in response) {
        const errorMessage = response.message;
        queryParams += `${encodeURIComponent(errorMessage)}`;
    }

    return queryParams
}


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: 'tourismapp',
            name: "Tourism app",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        return null;
                    }
                    const { email, password } = credentials
                    const { data } = await axios.post(`${baseAPIURL}/auth/login`, {
                        email,
                        password,
                    });
                    return {
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email,
                        access_token: data.user.access_token
                    }
                } catch (error: any) {
                    if (error && error?.response?.data) throw new Error(convertToQueryParams(error?.response?.data))
                    throw new Error('server error: ' + encodeURIComponent('Invalid username or password'));
                }
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
        signIn: async ({ account, profile, user }) => {
            return true;
        },
        redirect: async ({ url, baseUrl }) => {
            return baseUrl
        },
        jwt: async ({ token, user }: { token: any, user: any }) => {
            try {
                // if (token && !token.access_token) {
                //     const tokenJwt = await signJWT(
                //         JSON.stringify({
                //             name: token.name,
                //             email: token.email,
                //         }),
                //         "1d"
                //     );
                //     const result = await fetch(`${baseAPIURL}/auth/callback`, {
                //         method: "POST",
                //         headers: {
                //             Authorization: `Bearer ${tokenJwt}`,
                //         },
                //     });
                //     const resultJson = await result.json();
                //     if (!result.ok) {
                //         throw resultJson;
                //     }

                //     token = {
                //         ...token,
                //         access_token: resultJson.access_token,
                //     };
                // }
                return token;
            } catch (error) {
                throw error;
            }
        },
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    access_token: token.access_token,
                },
            };
        },
    },
    pages: {
        signIn: '/auth/sign-in',
        error: '/auth/sign-in',
    },
    debug: false,
    // jwt: {
    //     async encode({ secret, token }) {
    //         return jwt.sign(token, secret)
    //     },
    //     async decode({ secret, token }) {
    //         return jwt.verify(token, secret)
    //     },
    // },
};
