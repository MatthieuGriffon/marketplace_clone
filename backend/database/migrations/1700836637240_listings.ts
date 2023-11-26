import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'listings'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id') // Clé primaire auto-incrémentée
            table.string('title').notNullable()
            table.text('description')
            table.decimal('price', 12, 2) // Précision et échelle pour le prix
            table
                .uuid('user_id')
                .notNullable()
                .references('id')
                .inTable('users')
            table.dateTime('publication_date')
            table.string('status').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
