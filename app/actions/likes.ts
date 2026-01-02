'use server'

import { toggleLike, GetLikes, hasLiked } from '@/lib/db'
import { verifySession } from '@/lib/session'

export async function toggleLikeAction(photoId: string) {
  const username = await verifySession()


  await toggleLike(photoId, username)

  const likes = await GetLikes(photoId)
  const userLiked = await hasLiked(photoId, username)

  return { likes, userLiked }
}
