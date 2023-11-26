import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'use_sessions'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id') // Clé primaire auto-incrémentée
            table
                .uuid('user_id')
                .notNullable()
                .references('id')
                .inTable('users')
            table.string('session_id').notNullable()
            table.dateTime('created_at').notNullable()
            table.dateTime('expires_at').notNullable()
            table.text('data')
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
