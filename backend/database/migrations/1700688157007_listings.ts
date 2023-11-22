import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'listings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.string('title', 255).notNullable()
      table.text('description').notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.string('category', 255).notNullable()
      table.json('images') // Assuming JSON format for storing image links or references
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamp('published_at').defaultTo(this.now())
      table.enu('status', ['active', 'inactive']).defaultTo('active')
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
