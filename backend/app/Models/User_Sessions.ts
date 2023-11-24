import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class UserSession extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public user_id: number

    @column()
    public session_id: string

    @column()
    public created_at: Date

    @column()
    public expires_at: Date

    @column({ serializeAs: null })
    public data: string

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>
}
