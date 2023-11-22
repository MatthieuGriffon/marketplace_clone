import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.string('name', 255).notNullable() // Nom de l'utilisateur
      table.string('email', 255).notNullable().unique() // Email, doit être unique
      table.string('password', 255).notNullable() // Mot de passe hashé
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now()) // Date de création
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now()) // Date de dernière modification
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
