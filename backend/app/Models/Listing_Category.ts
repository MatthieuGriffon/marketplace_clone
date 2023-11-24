import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Listing from './Listing'
import Category from './Category'

export default class ListingCategory extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public listing_id: number

    @column()
    public category_id: number

    @belongsTo(() => Listing)
    public listing: BelongsTo<typeof Listing>

    @belongsTo(() => Category)
    public category: BelongsTo<typeof Category>
}
