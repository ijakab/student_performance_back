const BaseScoper = use('App/Scopers/Base')
const UserRepository = use('App/Repositories/User')

class UserBaseScoper extends BaseScoper{
    constructor(ctx) {
        super(ctx, new UserRepository())
    }
}

module.exports = UserBaseScoper
