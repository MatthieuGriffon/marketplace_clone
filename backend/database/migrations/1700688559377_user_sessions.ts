import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'user_sessions'
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('jwt_token', 255).notNullable()
      table.timestamp('expiration_date').notNullable()
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
