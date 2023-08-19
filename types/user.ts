import { DistrictType, ProvinceType, RegencyType, VillageType } from "./administrative";

export type AccessToken = {
    type: string;
    token: string;
    expires_at: string;
};

export type Role = 'agent' | 'tourist' | 'admin'

export type UserType = {
    id: string;
    name: string;
    email: string;
    password: string;
    avatar: object;
    rememberMeToken: string | null;
    emailVerifiedAt: string | null;
    nikOrPassport: string;
    isTourism: boolean;
    address: string;
    phoneNumber: string;
    role: Role;
    country: string;
    provinceId: string | null;
    province: ProvinceType[];
    regencyId: string | null;
    regency: RegencyType[];
    districtId: string | null;
    district: DistrictType[];
    villageId: string | null;
    village: VillageType[];
    createdAt: string;
    updatedAt: string;
};

export type UserAuthType = {
    user?: UserType & {
        access_token: AccessToken;
    };
    expires?: string;
};