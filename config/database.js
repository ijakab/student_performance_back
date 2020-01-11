'use strict'

const Env = use('Env')
const Helpers = use('Helpers')
const Config = use('Config')
const prefix = Config.get('gaussbox.prefix')

module.exports = {
    /*
     |--------------------------------------------------------------------------
     | Default Connection
     |--------------------------------------------------------------------------
     |
     | Connection defines the default connection settings to be used while
     | interacting with SQL databases.
     |
     */
    connection: Env.get('DB_CONNECTION', 'sqlite'),
    migrationsTable: `migrations_${prefix}`,
    
    /*
     |--------------------------------------------------------------------------
     | Sqlite
     |--------------------------------------------------------------------------
     |
     | Sqlite is a flat file database and can be good choice under development
     | environment.
     |
     | npm i --save sqlite3
     |
     */
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
        },
        useNullAsDefault: true,
        debug: Env.get('DB_DEBUG', false)
    },
    
    
    /*
     |--------------------------------------------------------------------------
     | MySQL
     |--------------------------------------------------------------------------
     |
     | Here we define connection settings for MySQL database.
     |
     | npm i --save mysql
     |
     */
    mysql: {
        client: 'mysql',
        connection: {
            host: Env.get('DB_HOST', 'localhost'),
            port: Env.get('DB_PORT', ''),
            user: Env.get('DB_USER', 'root'),
            password: Env.get('DB_PASSWORD', ''),
            database: Env.get('DB_DATABASE', 'adonis'),
            charset: 'UTF8'
        },
        // prefix: 'cms_',
        debug: Env.get('DB_DEBUG', false)
    },
    
    crm: {
        client: 'mysql',
        connection: {
            host: Env.get('DB_CRM_HOST', 'localhost'),
            port: Env.get('DB_CRM_PORT', ''),
            user: Env.get('DB_CRM_USER', 'root'),
            password: Env.get('DB_CRM_PASSWORD', ''),
            database: Env.get('DB_CRM_DATABASE', 'adonis')
        },
        debug: Env.get('DB_DEBUG', false)
    },
    
    /*
     |--------------------------------------------------------------------------
     | PostgreSQL
     |--------------------------------------------------------------------------
     |
     | Here we define connection settings for PostgreSQL database.
     |
     | npm i --save pg
     |
     */
    pg: {
        client: 'pg',
        connection: {
            host: Env.get('DB_HOST', 'localhost'),
            port: Env.get('DB_PORT', ''),
            user: Env.get('DB_USER', 'root'),
            password: Env.get('DB_PASSWORD', ''),
            database: Env.get('DB_DATABASE', 'adonis')
        },
        debug: Env.get('DB_DEBUG', false)
    },
}
