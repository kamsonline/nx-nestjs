import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('local', 'development', 'test', 'production').required(),
  TENANTS_PORT: Joi.number().default(3000),
  USERS_PORT: Joi.number().default(3001),
});
