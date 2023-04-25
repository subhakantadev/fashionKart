import React from 'react'

function SingleProduct({ products }) {
    console.log(products)
    return (
        <div className="m-3 ">
            <div className="max-w-sm m-3   bg-white rounded-lg shadow-md ">
                <Link href={`/products/${products?.id}`}>
                    <div className=" flex justify-center m-2">
                        <img
                            className="h-36  w-36 object-content"
                            src={products?.image}
                            alt="product"
                        />
                    </div>
                </Link>
                <div className=" p-2 ">
                    <div className="flex justify-center items-center h-10  m-3">
                        <a className=" font-semibold tracking-tight">
                            {products?.title}
                        </a>
                    </div>

                    <div className="flex justify-center items-center mt-2.5 mb-5">
                        <span className=" font-bold text-gray-900 ">
                            Rs.{products?.price}
                        </span>
                    </div>
                    <div className="flex justify-center mt-4 mb-2 space-x-3  lg:mt-6">
                        <Link href="/cart">
                            <button className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 ">
                                Buy now
                            </button>
                        </Link>

                        <button
                            className="inline-flex items-center  p-2 text-sm font-medium text-center  text-gray-900 bg-white rounded-lg border border-gray-300  hover:bg-gray-100 ">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct