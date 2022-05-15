import { User, ROLES } from './01-enum';

const currentUser: User = {
    username: 'John',
    role: ROLES.CUSTOMER
};

export const checkAdminRole = () => currentUser.role === ROLES.ADMIN ? true: false;

export const checkRole = (role: ROLES) => currentUser.role === role ? true: false;

export const checkRoleV2 = (...roles: string[]) => roles.includes(currentUser.role) ? true: false;

console.log(checkRoleV2(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER));


