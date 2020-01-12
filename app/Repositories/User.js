const User = use('App/Models/User')
const BaseRepository = use('App/Repositories/Base')

class UserRepository extends BaseRepository {
    constructor() {
        super(User)
    }
}

module.exports = UserRepository
