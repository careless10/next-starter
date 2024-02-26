import React from 'react'

const Product = (props: any) => {
  console.log(props.params.id);
  return (
    <div>Product</div>
  )
}

export default Product