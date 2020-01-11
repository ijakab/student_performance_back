'use strict'

class ServiceCreator {
  async handle (ctx, next, [file, ctxName='service', inputParamName]) {
      const Class = use(`App/Services/${file}`)
      let instance = new Class(ctx)
      if(instance.getScope) {
          let input = ctx.params[inputParamName] || ctx.body[inputParamName]
          await instance.getScope(input)
      }
      ctx[ctxName] = instance
      await next()
  }
}

module.exports = ServiceCreator
