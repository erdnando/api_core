export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["3JrxMVYIgV5JpXMb0v/O9w==", "OvISBU7jk9IQrPJs92FU9w==","TLcZkDqZvxWeScq5ej7LuQ==","cuGEJOShbcbPEZ+M/shJQQ=="]),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','jBEY/rRrXLtbBGxpa9nwLw=='),
    secret: env('JWT_SECRET','kxK1u9XMvFwNhFrYCwoWYw==')
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
