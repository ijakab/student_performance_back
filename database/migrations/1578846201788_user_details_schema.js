'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserDetailsSchema extends Schema {
  up () {
    this.create('user_details', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('cascade')
      
      table.string('age')
      table.string('sex')
      table.string('address')
      table.string('famsize')
      table.string('Pstatus')
      table.string('Medu')
      table.string('Fedu')
      table.string('Mjob')
      table.string('Fjob')
      table.string('traveltime')
      table.string('studytime')
      table.string('activities')
      table.string('higher')
      table.string('internet')
      table.string('romantic')
      table.string('freetime')
      table.string('goout')
      table.string('Dalc')
      table.string('Walc')
      table.string('absences')
      table.string('G3')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_details')
  }
}

module.exports = UserDetailsSchema
