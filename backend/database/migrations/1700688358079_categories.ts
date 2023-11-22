import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'categories'
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.string('name', 255).notNullable()
      table.text('description').nullable()
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
