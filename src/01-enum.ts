enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

type User = {
    username: string;
    role: ROLES;
}

const fredUser: User = {
    username: 'Sh4rkD',
    role: ROLES.ADMIN
}

