import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Listing from './Listing'

export default class ListingImage extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public listing_id: number

    @column()
    public image_url: string

    @column()
    public created_at: Date

    @column()
    public updated_at: Date

    @belongsTo(() => Listing)
    public listing: BelongsTo<typeof Listing>
}
