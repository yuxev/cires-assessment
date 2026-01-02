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

export async function toggleLike(photoId: string, username: string) {
  try {
    let existingLikes: string[] = [];
    
    try {
      existingLikes = JSON.parse(await db.get(photoId));
    } catch {
      existingLikes = [];
    }
    
    if (!existingLikes.includes(username)) 
      existingLikes.push(username);
    else
      existingLikes.splice(existingLikes.indexOf(username), 1);
  
    await db.put(photoId, JSON.stringify(existingLikes));
  } catch (error) {
    console.error('Error toggling like:', error);
    throw error;
  }
};


export async function GetLikes(photoId: string): Promise<number> {
  try {
    const likes: string[] = JSON.parse(await db.get(photoId));
    return likes.length;
  }
  catch {
    return 0;
  }
};

export async function hasLiked(photoId: string, username: string): Promise<boolean> {
  try {
    const likes: string[] = JSON.parse(await db.get(photoId));
    return likes.includes(username);
  }
  catch {
    return false;
  }
};