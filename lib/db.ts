import { Level } from "level";
import path from "path";

declare global {
  var __db_instance: Level<string, string> | undefined;
}

const DB_PATH = path.join(process.cwd(), "likes_db");

