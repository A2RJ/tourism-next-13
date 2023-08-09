import { create } from "zustand"
import { ErrorSlice, createErrorSlice } from "./useErrorStore"
import { PackageSlice, createPackageSlice } from "./usePackageStore"

const useGlobalStore = create<PackageSlice & ErrorSlice>()(
    (...a) => ({
        ...createPackageSlice(...a),
        ...createErrorSlice(...a),
    })
)

export default useGlobalStore