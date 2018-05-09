module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'notforgotten',
        user: process.env.DB_USER || 'notforgotten',
        password: process.env.DB_PASS || 'notforgotten',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './notforgotten.sqlite'

        }
    }
}