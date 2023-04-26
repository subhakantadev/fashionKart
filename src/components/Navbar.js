import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/Bs";
import { useSelector } from 'react-redux';
import Router from "next/router";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [filterData, setFilterData] = useState("")
    const [searchData, setSearchData] = useState([]);
    const [allData, setAllData] = useState([])
    const cartItems = useSelector((store) => store.cart.addToCart) || [];
    // console.log(cartItems)

    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setAllData(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    function searchText(e) {
        setFilterData(e.target?.value)
        let serchText = e.target?.value
        console.log(serchText)

        setShowModal(true)
        if (serchText && serchText.trim().length > 0) {
            let product = allData.filter((product) => {
                return product.title
                    .toLowerCase()
                    .includes(serchText.toLowerCase().trim());
            });
            setSearchData(product)
            console.log(searchData)
        } else {
            setShowModal(false)
        }
    }
    console.log(searchData)
    return (
        <nav className='sticky top-0 min-w-screen  px-48  flex justify-between items-center h-16 bg-blue-500 drop-shadow-md'>
            <div >
                <Link href="/">
                    <div className="text-white text-3xl font-semibold ">
                        FashionKart{" "}
                    </div>
                </Link>
            </div>
            <div className=''>
                <input className=' pl-2 border border-black text-black text-base  w-96 h-8 rounded-lg '
                    type='text' placeholder="Search.."

                    value={filterData}
                    onChange={searchText}
                />
                {showModal === true ? (
                    <div className=" flex justify-center relative ">
                        <div className="absolute z-30 p-4 bg-gray-100 rounded-md">
                            {searchData.length !== 0 ? (
                                searchData.map((products) => {
                                    return (
                                        <div
                                            key={products.id}
                                            className="flex justify-center hover:bg-gray-200  curser-pointer text-sm font-semibold py-1"
                                        >
                                            <div
                                                onClick={() => {
                                                    setShowModal(false);
                                                    Router.push(`/products/${products?.id}`);
                                                }}
                                            >
                                                {products?.title}
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="h-8 capitalize font-bold text-sm py-2 text-gray-800">
                                    No such product found
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
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