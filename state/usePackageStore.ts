import { create, StateCreator } from 'zustand';
import { createErrorSlice, ErrorSlice } from './useErrorStore';
import { PackageType } from '@/types/package';
import provinceAction from '@/action/administrative/province';

export interface PackageSlice {
    package: Partial<PackageType>;
    packages: PackageType[];
    addPackage: (pkg: PackageType) => void;
    getPackage: (id: string) => void;
    updatePackage: (id: string, pkg: PackageType) => void;
    deletePackage: (id: string) => void;
};
export const createPackageSlice: StateCreator<
    PackageSlice & ErrorSlice,
    [],
    [],
    PackageSlice
> = (set) => ({
    package: {},
    packages: [],
    addPackage: async (pkg) => {

    },
    getPackage: async (id) => {
        const data = provinceAction.show({ id })
        set({ package: data })
    },
    updatePackage: async (id, pkg) => { },
    deletePackage: (id) => { }
})

const usePackageStore = create<PackageSlice & ErrorSlice>()(
    (...a) => ({
        ...createPackageSlice(...a),
        ...createErrorSlice(...a),
    })
)

export default usePackageStore