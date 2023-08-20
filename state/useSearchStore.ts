import { create } from "zustand"

type SearchStoreType = {
    keyword: string
    setKeyword: (keyword: string) => void
}

export const useSearchStore = create<SearchStoreType>((set, get) => ({
    keyword: '',
    setKeyword: (keyword: string) => set({ keyword: keyword })
}))