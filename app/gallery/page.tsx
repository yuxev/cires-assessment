import { verifySession } from '@/lib/session';
import PhotoGrid from '@/components/PhotoGrid';

export default async function GalleryPage() {
  const user = await verifySession();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back, {user}</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg whitespace-nowrap">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg whitespace-nowrap transition">
              Nature
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg whitespace-nowrap transition">
              Travel
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg whitespace-nowrap transition">
              Architecture
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg whitespace-nowrap transition">
              Food & Drink
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - YOU implement the logic here */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* <PhotoGrid /> */}
      </main>
    </div>
  );
}