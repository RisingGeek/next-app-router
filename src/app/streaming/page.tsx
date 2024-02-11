import PostFeed from '@/modules/PostFeed'
import React, { Suspense } from 'react'

export default function Streaming() {
  return (
    <div>
      <h1>Streaming</h1>
      <Suspense fallback={<p>loading feed for 5 sec........</p>}>
        <PostFeed />
      </Suspense>
    </div>
  )
}
