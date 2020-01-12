const BaseUserScoper = use('App/Scopers/User/Base')
const throwError = use('App/Helpers/ThrowError')

class AdminUserScoper extends BaseUserScoper{
    async getScope(identifierOrInstance) {
        //throw error if user in this execution context cannot access records that this service handles, or those records do not exist
        if(!this.user.role !== 'admin') throwError(401, 'Admin only')
    }
}

module.exports = AdminUserScoper
