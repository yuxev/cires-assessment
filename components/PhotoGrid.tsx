'use client'

import LikeButton from './LikeButton';
import {useInView} from 'react-intersection-observer';
import { useState, useEffect, use } from 'react';
import { fetchUnsplashPhotos , UnsplashPhoto } from '@/app/actions/gallery';

interface PhotoGridProps {
  initialPhotos: UnsplashPhoto[];
}

export default function PhotoGrid({ initialPhotos }: PhotoGridProps) {

  const [photos, setPhotos] = useState<UnsplashPhoto[]>(initialPhotos);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isLoading && hasMore)
      LoadMorePhotos();
  }, [inView, hasMore , isLoading]);
  
  const LoadMorePhotos = async () => {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const newPhotos = await fetchUnsplashPhotos(nextPage);
      
      if (newPhotos.length === 0)
        setHasMore(false);
      else {
        setPhotos(prevPhotos => {
          const uniqueNew = newPhotos.filter(
            np => !prevPhotos.some(p => p.id === np.id)
          );
          return [...prevPhotos, ...uniqueNew];
        });
        setPage(nextPage);
      }
    } catch (error) {
      console.error('Error loading photos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Pinterest-style masonry layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 px-4">
        {photos.map((photo: any) => (
          <div
            key={photo.id}
            className="break-inside-avoid group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container - natural height */}
            <div className="relative w-full overflow-hidden bg-gray-100">
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <p className="font-medium text-sm line-clamp-2">{photo.alt_description}</p>
                </div>
              </div>
            </div>

            {/* Info Bar */}
            <div className="p-3 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900 truncate">
                  {photo.user.name}
                </span>
              </div>
              <LikeButton
                photoId={photo.id}
                initialLikes={photo.likes}
                initialUserLiked={photo.userLiked}
              />
            </div>
          </div>
        ))}
      </div>
      
      {isLoading && (
         <div className="flex justify-center py-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
            <p className="text-sm text-gray-500">Loading more photos...</p>
          </div>
        </div>
      )}

      <div ref={ref} className="h-10" />

      {/* Empty State - For when photos array is empty */}
      {photos.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No photos to display</p>
          <p className="text-gray-400 text-sm mt-2">Photos will appear here once loaded</p>
        </div>
      )}
    </div>
  );
}
