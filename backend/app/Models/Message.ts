import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Message extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public content: string

    @column()
    public sender_id: number

    @column()
    public recipient_id: number

    @column()
    public date_sent: Date

    @column()
    public status: string

    @belongsTo(() => User, {
        foreignKey: 'sender_id',
    })
    public sender: BelongsTo<typeof User>

    @belongsTo(() => User, {
        foreignKey: 'recipient_id',
    })
    public recipient: BelongsTo<typeof User>
}
