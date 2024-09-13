export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRolesStatuses = Record<UserRole, string>
// Замініть наступний код на версію за допомогою Record
const RoleDescription : UserRolesStatuses= {
  admin: 'Admin User',
 editor: 'Editor User',
  guest: 'Guest User',
};
