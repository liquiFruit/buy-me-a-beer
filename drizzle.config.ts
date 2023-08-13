import type { Config } from "drizzle-kit"


export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./src/db/beer.db"
  }
} satisfies Config
