import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";
import * as schema from "../../../migration/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("🔴 Cannot find DATABASE URL");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });

const migrateDB = async () => {
  try {
    console.log("Migrating database");
    await migrate(db, { migrationsFolder: "migration" });
    console.log("🟢 Migration successful");
  } catch (error) {
    console.log("Error while db migration: ", error);
  }
};
migrateDB();
export default db;
