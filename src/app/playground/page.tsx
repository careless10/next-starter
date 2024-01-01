import Link from 'next/link'
import React from 'react'

async function PlaygroundPage(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json();
  console.log(data.length);

  return (
    <div>
        {data.map( (item:any) => <h3>{item.title}</h3>)}
    </div>
  )
}

export default PlaygroundPage