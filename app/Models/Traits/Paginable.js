'use strict'

class Paginable {
    register(Model) {

        Model.queryMacro('paginable', function ({page, limit, noPaginate}) {
            if(noPaginate) return this.fetch()
            
            if(!page || page < 1) page = 1
            if(!limit) limit = 10
            return this.paginate(page, limit)
        })

    }
}

module.exports = Paginable
