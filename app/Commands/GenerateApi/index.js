'use strict'
const ace = require('@adonisjs/ace')
const exec = use('App/Commands/Exec-promise')
const Templater = use('App/Commands/Templater')
const path = require('path')
const Helpers = use('Adonis/Src/Helpers')
const lowerFirst = require('lodash/lowerFirst')
const Config = use('Config')
const prefix = Config.get('gaussbox.prefix')

class GeneratorCommand extends ace.Command {
    static get signature() {
        return 'make:api { name: name of api }  { --only=@value: make only some part of api } '
    }
    
    static get description() {
        return 'Generates model, migration, service, controller, route and transformer'
    }
    
    async handle(args, flags) {
        args.name = args.name.charAt(0).toUpperCase() + args.name.slice(1) //Make first letter uppercase
        if(!flags.only || flags.only === 'migration') await exec(`adonis make:migration ${args.name} --action=create`)
        if(!flags.only || flags.only === 'routes') await this.generateRoute(args.name)
        if(!flags.only || flags.only === 'model') await this.generateModel(args.name)
        if(!flags.only || flags.only === 'attributes') await this.generateAttributeConfig(args.name)
        if(!flags.only || flags.only === 'scopedService') await this.generateScopedService(args.name)
        if(!flags.only || flags.only === 'unscopedService') await this.generateUnscopedService(args.name)
        if(!flags.only || flags.only === 'transformer') await this.generateTransformer(args.name)
        if(!flags.only || flags.only === 'controller') await this.generateController(args.name)
        this.success('Done')
        process.exit(0)
    }
    
    async generateScopedService(modelName) {
        const templateFile = path.join(__dirname, './templates', 'ScopedService.mustache')
        const fileName = `Scoped/${modelName}`
        const filePath = `${Helpers.appRoot()}/app/Services/${fileName}.js`
        
        await this._generateFile(templateFile, filePath, {Model: modelName})
    }
    
    async generateUnscopedService(modelName) {
        const templateFile = path.join(__dirname, './templates', 'UnscopedService.mustache')
        const fileName = `Unscoped/${modelName}`
        const filePath = `${Helpers.appRoot()}/app/Services/${fileName}.js`
        
        await this._generateFile(templateFile, filePath, {Model: modelName})
    }
    
    async generateTransformer(modelName) {
        const templateFile = path.join(__dirname, './templates', 'Transformer.mustache')
        const fileName = `${modelName}Transformer`
        const filePath = `${Helpers.appRoot()}/app/Transformers/${fileName}.js`
        
        await this._generateFile(templateFile, filePath, {Model: modelName})
    }
    
    async generateController(modelName) {
        const templateFile = path.join(__dirname, './templates', 'Controller.mustache')
        const fileName = `${modelName}Controller`
        const filePath = `${Helpers.appRoot()}/app/Controllers/Http/${fileName}.js`
        
        await this._generateFile(templateFile, filePath, {Model: modelName, modelCamel: lowerFirst(modelName)})
    }
    
    async generateRoute(modelName) {
        const templateFile = path.join(__dirname, './templates', 'Route.mustache')
        const fileName = `${modelName}`
        const filePath = `${Helpers.appRoot()}/app/Routes/${fileName}.js`
        
        await this._generateFile(templateFile, filePath, {Model: modelName, modelCamel: lowerFirst(modelName), prefix})
    }
    
    async generateModel(modelName) {
        const templateFile = path.join(__dirname, './templates', 'Model.mustache')
        const filePath = `${Helpers.appRoot()}/app/Models/${modelName}.js`
        
        await this._generateFile(templateFile, filePath, {Model: modelName})
    }
    
    async generateAttributeConfig(modelName) {
        const templateFile = path.join(__dirname, './templates', 'Attributes.mustache')
        const filePath = `${Helpers.appRoot()}/app/Models/Attributes/${modelName}.js`
        
        await this._generateFile(templateFile, filePath, {Model: modelName})
    }
    
    async _generateFile(templateFile, filePath, bindings) {
        let templateContent = await this.readFile(templateFile, 'utf-8')
        let templater = new Templater(templateContent)
        templater.bind(bindings)
        let fileContent = templater.run()
        
        await this.generateFile(filePath, fileContent)
    }
}

module.exports = GeneratorCommand
