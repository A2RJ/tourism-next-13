import { create } from "zustand"

interface Auth {
    name: string
    email: string
    token: string
}

export interface AuthSlice {
    user: Auth | boolean
    setUser: (user: Auth | boolean) => void
    deleteEverything: () => void
}
const useAuth = create<AuthSlice>((set) => ({
    user: false,
    setUser: (user: Auth | boolean) => set({ user: user }),
    deleteEverything: () => set({}, true)
}))

export default useAuth