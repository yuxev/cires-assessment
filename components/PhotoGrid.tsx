'use client'

import {useInView} from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { fetchUnsplashPhotos , UnsplashPhoto } from '@/app/actions/gallery';

export default function PhotoGrid() {
  // TODO: Add your state management here (photos, page, isLoading, hasMore)
  // TODO: Add useInView hook for infinite scroll
  // TODO: Add useEffect for loading more photos
  // TODO: Add loadMore function

  // DUMMY DATA - Replace with your actual photos state
   const photos: UnsplashPhoto[] =  [];

  return (
    <div>
      {/* Photo Grid - Styled and ready for your photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* TODO: Map through your photos array here */}
        {photos.map((photo: any) => (
          <div
            key={photo.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-medium text-sm">{photo.alt_description}</p>
                </div>
              </div>
            </div>

            {/* Info Bar */}
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900 truncate">
                  {photo.user.name}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{photo.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TODO: Add your loading sentinel here with ref from useInView */}
      {/* Loading Spinner - Uncomment when you add loading state */}
      {/* {isLoading && (
        <div className="flex justify-center py-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
            <p className="text-sm text-gray-500">Loading more photos...</p>
          </div>
        </div>
      )} */}

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
