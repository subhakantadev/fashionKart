import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/Bs";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((store) => store.cart.addToCart) || [];
    console.log(cartItems)
    return (
        <nav className='sticky top-0 min-w-screen  px-48  flex justify-between items-center h-16 bg-blue-500 drop-shadow-md'>
            <div className=''>
                <Link href="/">
                    <div className="text-white text-3xl font-semibold ">
                        FashionKart{" "}
                    </div>
                </Link>
            </div>
            <div className=''>
                <input className=' pl-2 border border-black text-black text-base  w-72 h-8 rounded-lg '
                    type='text' placeholder="Search.."
                />
            </div>
            <div className=' flex justify-between items-center'>
                <Link href="/cart">
                    <div className="text-white text-3xl font-semibold  mx-2 ">
                        <AiOutlineShoppingCart />
                        {cartItems.length > 0 ? (
                            <span
                                className="absolute  rounded-md bg-orange-600 w-5 h-5 text-white 
                  text-sm  text-center border border-white top-1 mx-2 "
                            >
                                {cartItems.length}
                            </span>
                        ) : null}
                    </div>

                </Link>
                <Link href="/profile">
                    <div className="text-white text-3xl font-semibold mx-2 ">
                        <BsPersonCircle />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar