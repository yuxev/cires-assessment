import { verifySession } from '@/lib/session';
import { fetchUnsplashPhotos } from '@/app/actions/gallery';

export default async function GalleryPage() {
  // This will kick you back to login if you aren't logged in
  const user = await verifySession();
  
  // Fetch photos from Unsplash
  const photos = await fetchUnsplashPhotos(1);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-600">
        🎉 Success! You are logged in.
      </h1>
      <p className="mt-4 text-xl">
        Welcome back, <span className="font-bold">{user}</span>
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p>Fetched {photos.length} photos</p>
        <pre>{JSON.stringify(photos.slice(0, 2), null, 2)}</pre>
      </div>
    </div>
  );
}