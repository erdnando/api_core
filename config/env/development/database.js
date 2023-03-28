module.exports =  ({ env }) => ({
	connection: {
        connectionString: 'strapi_mysql',
        host: env('DATABASE_HOST', '162.241.60.205'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'pymecomm_strapi_core'),
        user: env('DATABASE_USERNAME', 'pymecomm_strapi'),
        password: env('DATABASE_PASSWORD', 'Adqdisp06ERV'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
});
