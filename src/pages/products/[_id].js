import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function ProductDetails() {

    const router = useRouter();
    const id = router.query?._id
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProductData()
    }, [])
    // console.log(product)
    const fetchProductData = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res?.data);
            })
            .catch((err) => console.log(err));
    }

    const handleCart = (product) => {
        dispatch(addToCart(product))

    };
    return (<>
        <div className="mx-36 my-10 p-10  flex flex-row border-2 justify-center items-center shadow-lg">
            <div className="w-2/5   ">
                <img
                    alt="image of product"
                    className="h-72  w-72 object-content"
                    src={product?.image}
                />
            </div>
            <div className=" w-1/2 ml-6   ">

                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300 " >
                        <span className="text-sm leading-none text-gray-600 dark:text-gray-300 " style={{ padding: "2px 5px", borderRadius: "5px" }}>
                            {product?.category}
                        </span>
                    </p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                        {product?.title}
                    </h1>
                    <div className="m-3 flex justify-end">
                        <p className=" text-base text-gray-600 font-semibold ">
                            <strong>Rating : </strong><span style={{ background: 'green', color: "#fff", padding: "2px 5px", borderRadius: "5px" }}> {product?.rating?.rate}*</span>
                        </p>
                    </div>
                    <div className="m-3">
                        <p className=" text-base text-gray-600  my-7">
                            {product?.description}
                        </p>
                    </div>
                    <div className="m-3">
                        <p className=" text-xl font-bold text-gray-600  my-7">
                            ₹ {product?.price}
                        </p>
                    </div>
                    <div className="flex justify-around gap-4 ">
                        <button className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white hover:text-white  bg-yellow-500 w-full py-4 hover:bg-gray-800 rounded hover:shadow-md"
                            onClick={() => handleCart()}
                        >
                            Add to Cart
                        </button>
                        <Link
                            className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-orange-500 hover:bg- hover:text-white  w-full py-4 focus:outline-none rounded hover:shadow-lg"
                            href="/cart"
                        >
                            <button>Buy Now</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>

    </>)
}

export default ProductDetails