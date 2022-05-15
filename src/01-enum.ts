export enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

export type User = {
    username: string;
    role: ROLES;
}

export const fredUser: User = {
    username: 'Sh4rkD',
    role: ROLES.ADMIN
}

