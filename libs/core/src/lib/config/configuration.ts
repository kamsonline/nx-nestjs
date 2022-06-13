export const configuration = () => ({
  environment: process.env.NODE_ENV,
  tenantsPort: parseInt(process.env.PORT || '3000', 10),
  usersPort: parseInt(process.env.PORT || '3001', 10),
});
