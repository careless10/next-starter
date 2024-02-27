import React from 'react'

const Product = async (props: any) => {
  const response = await fetch("http://localhost:4000/products/" + props.params.id)
  const data = await response.json();

  return (
    <div>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Price: {data.price}</p>
      <p>Description: {data.description}</p>
      <p>Category: {data.category}</p>
      <p>Image: {data.image}</p>
      <img className='h-48' src={data.image} alt={data.title} />
      <p>{data.rating.rate}</p>
      <p>{data.rating.count}</p>
    </div>
  )
}

export default Product