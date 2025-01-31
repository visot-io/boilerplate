import "dotenv/config"
import { initUsersData } from "./initUsersData"
import { drizzle } from "drizzle-orm/node-postgres"
import { usersTable } from "../db/schema"
import { config } from "dotenv"
config({ path: "../../.env" })
const databaseUrl = process.env.DATABASE_URL!

async function main() {
  console.log(`Seeding ${databaseUrl}...`)
  const db = drizzle(databaseUrl)
  await db.delete(usersTable)
  let data = await db.insert(usersTable).values(initUsersData)
  console.log(`Done! ${data.rowCount} rows inserted`)
  process.exit(0)
}
main()
