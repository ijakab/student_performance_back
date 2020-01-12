const UserRepository = use('App/Repositories/User')

class UserController {
    constructor() {
        this.userRepository = new UserRepository()
    }
    
    async create({adminUserScoper, request}) {
        let user = await adminUserScoper.create(request.all())
        return this.userRepository.reloadForResponse(user.id)
    }
}

module.exports = UserController
