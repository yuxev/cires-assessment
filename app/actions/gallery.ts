'use server';
import { GetLikes, hasLiked } from '@/lib/db';
import { getUser } from '@/lib/session';


// 1. Define the Data Structure
export interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
    username: string;
  };
  width: number;
  height: number;
  likes: number;
  userLiked: boolean;
}

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function fetchUnsplashPhotos(page: number = 1, topic?: string): Promise<UnsplashPhoto[]> {
	const url: string = `https://api.unsplash.com/photos?page=${page}&per_page=12&order_by=latest`;
	// console.log("~~~~~~~~~~~~~~ " + url + " ~~~~~~~~~~~~~~")
	try {
		const response = await fetch(url, {
			headers: {
				Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
			},
			cache: 'no-store',
		});
		if (!response.ok)
			throw new Error(`Too many requests (50/hour free tier): ${response.statusText}`);
		
		const rawData = await response.json();

		const photo : UnsplashPhoto[] = rawData.map((photo : any) => ({
		id: photo.id,
		urls: {
			small: photo.urls.small,
			regular: photo.urls.regular,
		},
		alt_description: photo.alt_description || 'Untitled',
		user: {
			name: photo.user.name,
			username: photo.user.username,
		},
		width: photo.width,
		height: photo.height,
		likes: 0,
		hasLiked: false,
	  }));
	  
	const username: string = await getUser();
	const photosWithLikes = await Promise.all(
	photo.map(async (photo) => ({
		...photo,
		likes: await GetLikes(photo.id),
		userLiked: await hasLiked(photo.id, username),
	}))
	);

	return photosWithLikes;
	}
	catch (error) {
		console.error(error);
	}
	return [];
}