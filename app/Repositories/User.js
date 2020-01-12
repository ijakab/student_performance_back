const User = use('App/Models/User')
const BaseRepository = use('App/Repositories/Base')
const MLService = use('App/Services/ML')

class UserRepository extends BaseRepository {
    constructor() {
        super(User)
    }
    
    async create(data) {
        if(!data.password) UserRepository.throwError(400, 'password missing')
        let user = await super.create(data)
        await user.accounts().create({
            type: 'main',
            email: data.email,
            validated: 1,
            password: data.password
        })
        return user
    }
    
    async update(id, data) {
        let user = await super.update(id, data)
        if(data.email) {
            await user.accounts().update({
                email: data.email,
            })
        }
        if(data.password) {
            await user.accounts().update({
                password: data.password
            })
        }
        return user
    }
    
    async addDetails(user, data) {
        let details = user.getRelated('details')
        if(!details) details = await user.details().create({})
        
        let G3 = await MLService.predictFromDetails(details)
        details.G3 = G3
        
        details.merge(data)
        await details.save()
    }
}

module.exports = UserRepository
