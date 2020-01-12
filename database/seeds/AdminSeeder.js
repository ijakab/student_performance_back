'use strict'

const User = use('App/Models/User')
const Env = use('Env')
const adminPw = Env.getOrFail('ADMIN_PASS')

class LocaleSeeder {
    async run() {
        let admin = await User.create({
            username: 'admin',
            email: 'ivan.jakab0@gmail.com',
            firstname: 'Ivan',
            lastname: 'Jakab',
            role: 'admin'
        })
        await admin.accounts().create({
            type: 'main',
            email: 'ivan.jakab0@gmail.com',
            validated: 1,
            password: adminPw
        })
    }
}

module.exports = LocaleSeeder
