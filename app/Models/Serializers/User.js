const BaseSerializer = use('App/Models/Serializers/Base')
const MLService = use('App/Services/ML')

class UserDetailSerializer extends BaseSerializer{
    
    detailsInclude(modelInstance, output) {
        output.details = MLService.createResponseObject(modelInstance.getRelated('details'))
    }
}

module.exports = UserDetailSerializer
