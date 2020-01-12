const UserRepository = use('App/Repositories/User')

class UserController {
    constructor() {
        this.userRepository = new UserRepository()
    }
    
    async filter({request}) {
        return await this.userRepository.paginate(request.all())
    }
    
    async create({adminUserScoper, request}) {
        let user = await adminUserScoper.create(request.all())
        return this.userRepository.reloadForResponse(user.id)
    }
    
    async update({adminUserScoper, request, params}) {
        let user = await adminUserScoper.update(params.id, request.all())
        return this.userRepository.reloadForResponse(user.id)
    }
    
    async delete({adminUserScoper, params}) {
        let user = await this.userRepository.reloadForResponse(params.id)
        await adminUserScoper.delete(user.id)
        return user
    }
}

module.exports = UserController
