import { create } from 'zustand';

interface ToggleState {
    toggle: boolean;
    setToggle: () => void;
}

const useToggleMenuStore = create<ToggleState>((set) => ({
    toggle: true,
    setToggle: () => set((state: ToggleState) => ({ toggle: !state.toggle })),
}));

export default useToggleMenuStore;