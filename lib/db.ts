import { Level } from "level";
import path from "path";

declare global {
  var __db_instance: Level<string, string> | undefined;
}

const DB_PATH = path.join(process.cwd(), "likes_db");

let db: Level<string, string>;

if (!global.__db_instance) {
  db = new Level<string, string>(DB_PATH, { valueEncoding: "json" });
  global.__db_instance = db;
} else
  db = global.__db_instance;

export { db };
