import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'messages'
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.text('content').notNullable()
      table.integer('sender_id').unsigned().references('id').inTable('users')
      table.integer('recipient_id').unsigned().references('id').inTable('users')
      table.timestamp('sent_at').defaultTo(this.now())
      table.enu('status', ['read', 'unread']).defaultTo('unread')
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
