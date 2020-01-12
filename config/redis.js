const Env = use('Env')

module.exports = {
    /*
    |--------------------------------------------------------------------------
    | connection
    |--------------------------------------------------------------------------
    |
    | Redis connection to be used by default.
    |
    */
    connection: Env.get('REDIS_CONNECTION', 'local'),
    
    /*
    |--------------------------------------------------------------------------
    | local connection config
    |--------------------------------------------------------------------------
    |
    | Configuration for a named connection.
    |
    */
    local: {
        host: Env.get('REDIS_HOST', '127.0.0.1'),
        port: Env.get('REDIS_PORT', '6379'),
        db: Number(Env.get('REDIS_DB', '1'))
    },
}
