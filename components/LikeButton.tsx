'use client'

import { useState, useTransition } from 'react'
import { toggleLikeAction } from '@/app/actions/likes'

type LikeButtonProps = {
  photoId: string
  initialLikes: number
  initialUserLiked: boolean
}

export default function LikeButton({ photoId, initialLikes, initialUserLiked }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [userLiked, setUserLiked] = useState(initialUserLiked)
  const [isPending, startTransition] = useTransition()

  const handleToggle = () => {
    startTransition(async () => {
      try {
        const result = await toggleLikeAction(photoId)
        setLikes(result.likes)
        setUserLiked(result.userLiked)
      } catch (error) {
        console.error('Failed to toggle like', error)
      }
    })
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      aria-pressed={userLiked}
      className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-500 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <svg
        className={`w-5 h-5 transition-colors ${userLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeWidth={2}
          fill={userLiked ? 'currentColor' : 'none'}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{likes}</span>
    </button>
  )
}
