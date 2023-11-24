import {
    BaseModel,
    column,
    manyToMany,
    ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Listing from './Listing'

export default class Category extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public name: string

    @column()
    public description: string

    @column()
    public image_URL: string

    @manyToMany(() => Listing)
    public listings: ManyToMany<typeof Listing>
}
