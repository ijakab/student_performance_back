'use strict'
const throwError = use('App/Helpers/ThrowError')

class ScoperCreator {
  async handle (ctx, next, [file, ctxName, inputParamName]) {
      if(!file || !ctxName) throwError(500, 'Bad config for scoperCreator middleware. Provide file and name through props')
      const Class = use(`App/Scopers/${file}`)
      ctx[ctxName] = await Class.getScopedInstance(ctx, ctx.params[inputParamName] || ctx.request.input(inputParamName))
      await next()
  }
}

module.exports = ScoperCreator
