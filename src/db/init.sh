echo "Initalising database"

rm -rf ./src/db/drizzle ./src/db/db.sqlite && \
pnpm drizzle-kit generate:sqlite && \
node ./src/db/migrate.js && \
node ./src/db/seed.js && \
echo "Success" && \
exit

echo "Error"
