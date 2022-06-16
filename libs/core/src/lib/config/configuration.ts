export const configuration = () => ({
  environment: process.env['NODE_ENV'],
  tenantsPort: parseInt(process.env['HTTP_PORT'] || '3000', 10),
  usersPort: parseInt(process.env['HTTP_PORT'] || '3001', 10),
});
