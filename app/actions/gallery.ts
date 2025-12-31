'use server';

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
}

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function fetchUnsplashPhotos(page: number = 1, topic?: string): Promise<UnsplashPhoto[]> {
	const url = topic 
    ? `https://api.unsplash.com/topics/${topic}/photos?page=${page}&per_page=12`
    : `https://api.unsplash.com/photos?page=${page}&per_page=12&order_by=latest`;

	try {
		const response = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        cache: 'no-store', // 
      });
	  if (!response.ok)
		throw new Error(`Error fetching photos: ${response.statusText}`);
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
		likes: photo.likes,
	  }));
	  return photo;
	}
	catch (error) {
		console.error('Error fetching Unsplash photos:', error);
	}
	return [];
}