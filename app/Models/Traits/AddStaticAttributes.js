'use strict'

class AppSplit {
    register (Model) {
        if(Model._AttributeConfig && typeof Model._AttributeConfig === 'string') Model.AttributeConfig = use(Model._AttributeConfig)
        if(Model._CustomListSelects && typeof Model._CustomListSelects === 'string') Model.CustomListSelects = use(Model._CustomListSelects)
    }
}

module.exports = AppSplit
