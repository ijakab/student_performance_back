'use strict'

const Model = use('Model')
const addStandardTraits = use('App/Helpers/AddStandardTraits')

class User extends Model {
    
    // --- CONFIGURATION
    static boot() {
        super.boot()
        this.addTrait('Paginable')
        addStandardTraits(this)
    }
    
    static get Serializer() {
        return 'App/Models/Serializers/Base'
    }
    
    static get _AttributeConfig() {
        return 'App/Models/Attributes/UserDetail'
    }
    
}

module.exports = User
