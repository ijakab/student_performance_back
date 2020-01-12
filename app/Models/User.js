'use strict'

const Model = use('Model')
const addStandardTraits = use('App/Helpers/AddStandardTraits')

class User extends Model {

    // --- CONFIGURATION
    static boot() {
        super.boot()
        this.addTrait('Paginable')
        this.addTrait('IdOrSlug', {slug: 'username'})
        addStandardTraits(this)
        
        this.queryMacro('withSingleResponseData', function () {
            this.with('details')
            return this
        })
    }
    
    static get Serializer() {
        return 'App/Models/Serializers/User'
    }
    
    static get _AttributeConfig() {
        return 'App/Models/Attributes/User'
    }
    
    // --- RELATIONS
    accounts() {
        return this.hasMany('App/Models/Account')
    }

    tokens() {
        return this.hasMany('App/Models/Token')
    }
    
    details() {
        return this.hasOne('App/Models/UserDetail')
    }

    // --- CUSTOM
    async fetchMainAccount() {
        return await this.accounts().where('type', 'main').first()
    }

}

module.exports = User
