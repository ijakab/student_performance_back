const throwError = use('App/Helpers/ThrowError')

class Base {

    constructor(ctx, repository) {
        this.repository = repository
        this.ctx = ctx
        this.user = ctx.user
    }
    
    getScope() {
        throwError(500, `You did not override 'getScopedInstance' method on ${this.constructor.name}. Override it on all scopers`)
    }
    
    static async getScopedInstance(ctx, ...params) {
        let instance = new this(ctx)
        await instance.getScope(...params)
        return instance
    }
}

module.exports = Base
