import {
    BaseModel,
    column,
    belongsTo,
    BelongsTo,
    manyToMany,
    ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Category from './Category'

export default class Listing extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public title: string

    @column()
    public description: string

    @column()
    public price: number

    @column()
    public user_id: number

    @column()
    public publication_date: Date

    @column()
    public status: string

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>

    @manyToMany(() => Category)
    public categories: ManyToMany<typeof Category>
}
