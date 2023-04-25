import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

function cart() {
    const [value, setValue] = useState(1);
    const [allCartItems, setAllCartItems] = useState([])
    const cartItems = useSelector((store) => store.cart.addToCart) || [];
    console.log(cartItems)
    useEffect(() => {
        setAllCartItems(cartItems)
    }, [cartItems])
    return (
        <div>

            <div className="min-h-screen mx-auto mt-10">
                <div className="shadow-md flex ">

                    {allCartItems?.length > 0 ? (
                        <>
                            <div className="w-3/4 m-6 bg-white px-10 ">
                                <div className="flex  border-b pb-8">
                                    <h1 className="font-bold text-2xl text-blue-600">
                                        Shopping Cart
                                    </h1>
                                </div>
                                <div>
                                    <div className="flex mt-10 mb-5">
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                            Product Details
                                        </h3>
                                        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                                            Quantity
                                        </h3>
                                        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                                            Price
                                        </h3>
                                        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                                            Total
                                        </h3>

                                    </div>
                                    {allCartItems.map((product) => {

                                        return (
                                            <div
                                                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                                                key={product?.id}
                                            >
                                                <div className="flex w-2/5">
                                                    <div className="w-20">
                                                        <img
                                                            className=" rounded w-24 h-24"
                                                            src={product?.image}
                                                            alt="product"
                                                        />
                                                    </div>
                                                    <div className="flex ml-4 flex-grow">
                                                        <span className=" text-center  mt-8 font-semibold text-sm">
                                                            {product?.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center items-center w-1/5">
                                                    <input
                                                        type="number"
                                                        value={value}
                                                        onChange={(e) => setValue(e.target.value)}
                                                        className=" border text-center w-8"
                                                    />
                                                </div>
                                                <span className="text-center w-1/5 font-semibold text-sm">
                                                    {product?.price}
                                                </span>
                                                <span className="text-center w-1/5 font-semibold text-sm">
                                                    {product?.price * value}
                                                </span>
                                                {/* <span className="text-center w-1/5   font-semibold text-sm">
                            <button
                              className="text-red-500 cursor-pointer"
  
                            >
                              remove
                            </button>
                          </span> */}
                                            </div>
                                        );
                                    })}
                                    <div className="flex justify-between">
                                        <div>
                                            <Link href="/">
                                                <div className=" text-green-700 cursor-pointer mt-4 font-semibold ">
                                                    Continue Shopping
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                className=" text-red-700 cursor-pointer font-semibold "

                                            >
                                                Remove All
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="bg-gray-100 shadow">
                                <div className="w-full px-8 py-10">
                                    <h1 className="font-semibold  text-orange-400 text-2xl border-b pb-8">
                                        Order Summary
                                    </h1>
                                    <div className="flex  font-semibold mt-10 mb-5">
                                        <span className="uppercase">Total Items</span>
                                        <span className="ml-6 text-sm"></span>
                                    </div>
                                    <div className="flex  font-semibold mt-10 mb-5">
                                        <span className="uppercase ">Total Price</span>
                                        <span className="ml-6"> </span>
                                    </div>

                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="grid h-screen w-screen place-items-center">
                            {/* <div className="flex flex-col justify-center"> */}
                            <div className="font-bold text-center text-2xl">
                                Cart is empty
                                {/* </div> */}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default cart