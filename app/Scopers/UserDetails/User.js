const BaseScoper = use('App/Scopers/Base')
const throwError = use('App/Helpers/ThrowError')
const UserRepository = use('App/Repositories/User')

class AdminUserScoper extends BaseScoper{
    constructor(ctx) {
        super(ctx, new UserRepository())
    }
    
    async getScope(identifierOrInstance) {
        let canAccess = false
        this.accessedUser = await this.repository.reloadForResponse(identifierOrInstance)
        if(!this.accessedUser) throwError(404, 'user not found')
        if(this.user.role === 'admin' || this.user.role === 'teacher') canAccess = true
        if(this.user.id === this.accessedUser.id) canAccess = true
        if(!canAccess) throwError(401, 'error.unauthorized')
    }
    
    async addDetails(data) {
        return await this.repository.addDetails(this.accessedUser, data)
    }
}

module.exports = AdminUserScoper
