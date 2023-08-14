import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { InferModel } from "drizzle-orm"

export const beers = sqliteTable("beers", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull()
})

export type Beer = InferModel<typeof beers>
export type InsertBeer = InferModel<typeof beers, "insert">