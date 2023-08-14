export enum Role {
    AGENT = 'agent',
    TOURISM = 'tourist'
}

export type User = {
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
    provinceId: string;
    regencyId: string;
    districtId: string;
    villageId: string;
    createdAt: string;
    updatedAt: string;
};