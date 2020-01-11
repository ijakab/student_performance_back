'use strict'

class AppSplit {
  register (Model) {
    Model.queryMacro('whereApp', function (app) {
        this.where('apiKey', app)
        return this
    })
  }
}

module.exports = AppSplit
