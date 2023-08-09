import { StateCreator } from "zustand"

export interface ErrorSlice {
    error: boolean | string | object | []
    setError: (message: boolean | string | object | []) => void
}
export const createErrorSlice: StateCreator<
    ErrorSlice,
    [],
    [],
    ErrorSlice
> = (set) => ({
    error: false,
    setError: (message) => set({ error: message }),
})
