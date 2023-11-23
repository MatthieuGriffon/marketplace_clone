import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUsersTable extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('name')
      table.string('email').unique()
      table.string('password')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
