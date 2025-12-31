import { verifySession } from '@/lib/session';

export default async function GalleryPage() {
  // This will kick you back to login if you aren't logged in
  const user = await verifySession();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-600">
        🎉 Success! You are logged in.
      </h1>
      <p className="mt-4 text-xl">
        Welcome back, <span className="font-bold">{user}</span>
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        This is where the Unsplash images will go.
      </div>
    </div>
  );
}