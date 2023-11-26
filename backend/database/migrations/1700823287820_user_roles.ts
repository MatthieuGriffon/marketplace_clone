import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'user_roles'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('user_id').notNullable() // UUID pour correspondre au type dans `Users`
            table.integer('role_id').unsigned().notNullable() // Entier pour correspondre au type dans `Roles`

            // Définir la clé primaire composite
            table.primary(['user_id', 'role_id'])

            // Clés étrangères
            table
                .foreign('user_id')
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            table
                .foreign('role_id')
                .references('id')
                .inTable('roles')
                .onDelete('CASCADE')

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
