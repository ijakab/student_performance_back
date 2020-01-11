'use strict'

/*
 |--------------------------------------------------------------------------
 | Providers
 |--------------------------------------------------------------------------
 |
 | Providers are building blocks for your Adonis app. Anytime you install
 | a new Adonis specific package, chances are you will register the
 | provider here.
 |
 */
const providers = [
    '@adonisjs/framework/providers/AppProvider',
    '@adonisjs/bodyparser/providers/BodyParserProvider',
    '@adonisjs/cors/providers/CorsProvider',
    '@adonisjs/lucid/providers/LucidProvider',
    '@adonisjs/validator/providers/ValidatorProvider',
    '@adonisjs/ally/providers/AllyProvider',
    'adonis-throttle-requests/providers/ThrottleRequestsProvider',
    'adonis-gbox-provider/Providers/GBoxProvider',
    'adonis-advanced-serializer'
]

/*
 |--------------------------------------------------------------------------
 | Ace Providers
 |--------------------------------------------------------------------------
 |
 | Ace providers are required only when running ace commands. For example
 | Providers for migrations, tests etc.
 |
 */
const aceProviders = [
    'adonis-cache/providers/CommandsProvider',
    '@adonisjs/lucid/providers/MigrationsProvider',
    '@adonisjs/vow/providers/VowProvider',
    'adonis-gbox-provider/Providers/CommandsProvider',
]

/*
 |--------------------------------------------------------------------------
 | Aliases
 |--------------------------------------------------------------------------
 |
 | Aliases are short unique names for IoC container bindings. You are free
 | to create your own aliases.
 |
 | For example:
 |   { Route: 'Adonis/Src/Route' }
 |
 */
const aliases = {
    Cache: 'Adonis/Addons/Cache',
    Scheduler: 'Adonis/Addons/Scheduler'
}

/*
 |--------------------------------------------------------------------------
 | Commands
 |--------------------------------------------------------------------------
 |
 | Here you store ace commands for your package
 |
 */
const commands = [
    'App/Commands/GenerateApi',
]

module.exports = {providers, aceProviders, aliases, commands}
