import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'messages'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id') // Clé primaire auto-incrémentée
            table.text('content').notNullable()
            table
                .uuid('sender_id')
                .notNullable()
                .references('id')
                .inTable('users')
            table
                .uuid('recipient_id')
                .notNullable()
                .references('id')
                .inTable('users')
            table.dateTime('date_sent').notNullable()
            table.string('status').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
