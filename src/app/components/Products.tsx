import React from 'react'

const Products = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    return (
        <div className='flex flex-wrap justify-center gap-x-4'>
            {data.map((item: any) => <div className="card sm:w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'>
                    <img className='h-48' src={item.image} alt={item.title} />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description.slice(0,50)}</p>
                    <div className="card-actions justify-end">
                        <a href="https://wa.me/99988877766" className="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Products