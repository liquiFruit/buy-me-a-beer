# Buy Me a Beer

This is a demonstrational project to show how to accept payments via Paystack in Next.js 13. 

## Requirements: .env.local

- Paystack secret and public keys
  - `PAYSTACK_SECRET_KEY`
  - `PAYSTACK_PUBLIC_KEY`
- NextAuth secret key
  - `NEXTAUTH_SECRET`
  - Generate random key:
    - `openssl rand -base64 32`

## Setup database

- 1. Clean db files
  - rm -rf ./src/db/drizzle ./src/db/db.sqlite

- 2. Generate migrations
  - pnpm drizzle-kit generate:sqlite

- 3. Run migrations
  - node ./src/db/migrate.js

- 4. Run seed
  - node ./src/db/seed.js

- Optional: Check db 
  - pnpm drizzle-kit studio

## Run development server

- Install dependencies
  - `pnpm i`

- Run project
  - `pnpm dev` 