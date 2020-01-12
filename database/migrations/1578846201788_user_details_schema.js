'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserDetailsSchema extends Schema {
  up () {
    this.create('user_details', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('cascade')
      
      table.integer('age')
      table.integer('sex')
      table.integer('address')
      table.integer('famsize')
      table.integer('Pstatus')
      table.integer('Medu')
      table.integer('Fedu')
      table.integer('Mjob')
      table.integer('Fjob')
      table.integer('traveltime')
      table.integer('studytime')
      table.integer('activities')
      table.integer('higher')
      table.integer('internet')
      table.integer('romantic')
      table.integer('freetime')
      table.integer('goout')
      table.integer('Dalc')
      table.integer('Walc')
      table.integer('absences')
      table.integer('G3')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_details')
  }
}

module.exports = UserDetailsSchema
