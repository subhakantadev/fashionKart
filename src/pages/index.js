import SingleProduct from "@/components/SingleProduct";
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import Swal from "sweetalert2";

export default function Home() {
  const [fullData, setFullData] = useState([])
  const [category, setcategory] = useState([])
  const [filterData, setFilerData] = useState([])
  const dispatch = useDispatch();


  useEffect(() => {
    getProductDetails();
  }, [])
  const getProductDetails = () => {
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      setFullData(response.data)
      setFilerData(response.data)
    })
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setcategory(res.data);
    });
  }

  const catagoryHandler = (data) => {
    let catagoryData = fullData.filter((ele) => ele.category === data)
    console.log(catagoryData)
    setFilerData(catagoryData)
  }

  const handleCart = (data) => {
    dispatch(addToCart(data))
    Swal.fire("Product added to cart");
  };


  return (
    <div>
      <div className="w-full h-80 bg-blue-300"></div>
      <div className="px-10 h-16 flex justify-center items-center text-lg font-semibold">
        <button className="mx-6 px-3 py-1 border-0 border-blue-500 hover:bg-blue-600 hover:text-white rounded-md bg-slate-200" onClick={() => setFilerData(fullData)}>All</button>
        {
          category.map((data) => <button key={data} className="mx-6 py-1 px-3 border-0 border-blue-500 hover:bg-blue-600 hover:text-white rounded-md bg-slate-200" onClick={() => catagoryHandler(data)}>{data}</button>)
        }
      </div>
      <div className="grid grid-cols-3 my-8 ">

        {
          filterData.map((data) => <div className="px-10">
            <div className="m-3 ">

              <div className="max-w-sm m-3   bg-white rounded-lg shadow-md ">
                <Link href={`/products/${data?.id}`}>
                  <div className=" flex justify-center m-2">
                    <img
                      className="h-36  w-36 object-content"
                      src={data.image}
                      alt="product"
                    />
                  </div>
                </Link>
                <div className=" p-2 ">
                  <div className="flex justify-center items-center h-10  m-3">
                    <a className=" font-semibold tracking-tight">
                      {data.title}
                    </a>
                  </div>

                  <div className="flex justify-center items-center mt-2.5 mb-5">
                    <span className=" font-bold text-gray-900 ">
                      Rs.{data.price}
                    </span>
                  </div>
                  <div className="flex justify-center mt-4 mb-2 space-x-3  lg:mt-6">
                    <Link href="/cart">
                      <button className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 ">
                        Buy now
                      </button>
                    </Link>

                    <button
                      className="inline-flex items-center  p-2 text-sm font-medium text-center  text-gray-900 bg-white rounded-lg border border-gray-300  hover:bg-gray-100 "
                      onClick={() => handleCart(data)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>)
        }

      </div>
    </div>
  )
}
