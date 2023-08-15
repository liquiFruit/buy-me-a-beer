import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { type InferModel, relations } from "drizzle-orm"

export const beers = sqliteTable("beers", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull()
})
export type Beer = InferModel<typeof beers>
export type InsertBeer = InferModel<typeof beers, "insert">

export const donations = sqliteTable("donations", {
  id: integer("id").primaryKey(),
  userEmail: text("user_email").notNull().unique(),
  beerID: integer("beer_id").references(() => beers.id)
})

export type Donation = InferModel<typeof donations>
export type InsertDonation = InferModel<typeof donations, "insert">

export const donationsRelations = relations(donations, ({ one }) => ({
  beer: one(beers, {
    fields: [donations.id],
    references: [beers.id],
  }),
}))