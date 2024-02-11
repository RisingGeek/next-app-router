import React from 'react'

function timeout() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

export default async function PostFeed() {
  const response = await timeout();
  return (
    <div>This is a Post Feed</div>
  )
}
