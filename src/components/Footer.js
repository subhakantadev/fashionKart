
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer
                className="flex justify-center items-center text-center mt-16  p-5 bg-gray-50 ">
                <h1 className=" text-gray-800 font-semibold">
                    © 2023 All rights reserved
                    <Link href="/">
                        <div className="hover:text-blue-600 font-semibold cursor-pointer">
                            FashionKart
                        </div>
                    </Link>

                </h1>
            </footer>
        </>
    );
}

export default Footer;
