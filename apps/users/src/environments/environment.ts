const IS_OFFLINE = process.env['IS_OFFLINE'] === 'true';

export const environment = {
  production: false,
  offline: IS_OFFLINE,
};
