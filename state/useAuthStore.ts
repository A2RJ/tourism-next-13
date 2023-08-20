import { create } from "zustand"

type AccessToken = {
    type: string;
    token: string;
    expires_at: string;
};

export type UserSession = {
    user: {
        id: string
        name: string
        email: string
        access_token: AccessToken;
    },
    expires: Date
}
export interface AuthSlice {
    user: UserSession | boolean
    token: string | boolean
    setToken: (token: string | boolean) => void
    setUser: (user: UserSession | boolean) => void
    deleteEverything: () => void
}
const useAuth = create<AuthSlice>((set) => ({
    user: false,
    token: false,
    setToken: (token: string | boolean) => set({ token }),
    setUser: (user) => set({ user }),
    deleteEverything: () => set({}, true)
}))

export default useAuth