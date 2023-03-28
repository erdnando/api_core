export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','kxK1u9XMvFwNhFrYCwoWYw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','jBEY/rRrXLtbBGxpa9nwLw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
