
export type ProvinceType = {
  name: string
}

export type RegencyType = {
  name: string
}

export type DistrictType = {
  name: string
}

export type VillageType = {
  name: string
}

export interface Administrative {
  province: ProvinceType[];
  regency: RegencyType[];
  district: DistrictType[];
  village: VillageType[];
}
