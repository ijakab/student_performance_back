'use strict'

const User = use('App/Models/User')
const Account = use('App/Models/Account')

const { sanitizor} = use('Validator')
const Hash = use('Hash')

class AuthController {

    async checkUsername({request, response}) {

        const existingUsername = await User.query().where('username', request.input('username')).getCount()

        if (!existingUsername) return response.ok()

        response.badRequest('auth.usernameExists')
    }

    async checkEmail({request, response}) {

        const existingMainAccount = await Account.query().where({
            email: sanitizor.normalizeEmail(request.input('email')),
            type: 'main'
        }).getCount()

        if (!existingMainAccount) return response.ok()

        response.badRequest('auth.emailExists')
    }

    async login({request, response, auth, transform}) {

        const {username, password} = request.only(['username', 'password'])

        if (!username || !password) return response.badRequest()

        const {user, mainAccount} = await this._findLoginUser(username) // we are passing username which can be both username or email

        // if we don't have user in db, respond with badRequest invalid username or password instead of 404

        if (!mainAccount || !user) return response.badRequest('auth.invalidPasswordOrUsername')
        if (!mainAccount.validated) return response.forbidden('auth.mailNotValidated')

        // check pass
        const validPass = await Hash.verify(password, mainAccount.password)

        if (!validPass) return response.badRequest('auth.invalidPasswordOrUsername')

        // generate tokens
        const token = await this._generateUserTokens(auth, user)  // you can add token payload if needed as third parameter

        response.ok({
            user: await transform.item(user, 'User'),
            token: token.token,
            refreshToken: token.refreshToken
        })
    }

    // --- PRIVATE

    async _findLoginUser(usernameOrEmail) {
        // find user by username or main account email
        let user, mainAccount

        // first let's try fetching user via username
        user = await User.findBy('username', usernameOrEmail)

        if (user) {
            // we got user, lets fetch his main account
            mainAccount = await user.fetchMainAccount()
        } else {
            // else let's try via main account (sanitize email before)
            usernameOrEmail = sanitizor.normalizeEmail(usernameOrEmail)

            mainAccount = await Account.query().where({email: usernameOrEmail, type: 'main'}).first()
            user = mainAccount && await mainAccount.user().fetch()
        }

        return {mainAccount, user}
    }


    async _generateUserTokens(auth, user, customPayload) {

        return await auth
            .withRefreshToken()
            .generate(user, customPayload)

        // TODO Read NOTE below
        // ****************************************** NOTE ******************************************
        // If you are adding custom payload, be aware that it will not stay there after token refresh
        // You need to update refreshToken method to handle custom payload also!
        // ****************************************** **** ******************************************
    }

}


module.exports = AuthController
