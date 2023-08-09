import { create, StateCreator } from 'zustand';
import { Package } from '@/types/package';
import { createErrorSlice, ErrorSlice } from './useErrorStore';

export interface PackageSlice {
    package: Partial<Package>;
    packages: Package[];
    addPackage: (pkg: Package) => void;
    getPackage: (pkg: Package) => void;
    updatePackage: (pkg: Package) => void;
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
    addPackage: async (pkg) => { },
    getPackage: async (pkg) => { },
    updatePackage: async (pkg) => { },
    deletePackage: (id) => { }
})

const usePackageStore = create<PackageSlice & ErrorSlice>()(
    (...a) => ({
        ...createPackageSlice(...a),
        ...createErrorSlice(...a),
    })
)

export default usePackageStore