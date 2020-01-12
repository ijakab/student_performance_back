const BaseUserScoper = use('App/Scopers/User/Base')

class AdminUserScoper extends BaseUserScoper{
    async getScope(identifierOrInstance) {
        //throw error if user in this execution context cannot access records that this service handles, or those records do not exist
    }
}

module.exports = AdminUserScoper
