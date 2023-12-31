import React from "react";
import { baseUrl } from '@/config/appConfig';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCartList, setAddCart } from '@/lib/reduxStore/slices/storeSlice';
import { FaRegHeart } from "react-icons/fa";

interface CartProps {
    product?: any;
}

const ProductCard = (props: CartProps) => {

    const { product } = props;

    console.log('product', product)

    const dispatch = useDispatch();

    const addCart = (data: any) => {
        dispatch(setAddCart({ ...data, quantity: 1 }));
    }

    return (
        <div className="w-full h-[410px] flex items-center justify-content-center bg-indigo-300 ">
            <div className="w-full h-[410px]">
                {/* product image */}
                <Link
                    href={`${baseUrl}/product/${product?.slug}`}
                    className="w-full relative overflow-hidden cursor-pointer h-50 flex items-center justify-content-center mx-auto"
                >
                    <img src={`${baseUrl}/${product?.images[0]?.image}`} alt="" className="w-full" style={{ height: "272px" }} />
                    <div className="absolute inset-0 flex items-center justify-center space-x-1 bg-black/20 opacity-0 group-hover:opacity-100 transition">
                        <span className="w-10 h-10 rounded-full bg-accentOne p-2 flex items-center justify-center hover:bg-primary">
                            <FaRegHeart />
                        </span>
                        {/* <span className="w-8 h-8 rounded-full bg-accentOne p-2 flex items-center justify-center">
                            <FaRegHeart />
                        </span> */}
                    </div>
                </Link>
                {/* product image */}

                {/* Product description */}
                <div className="w-full ">
                    <Link href={`${baseUrl}/product/${product?.slug}`}>
                        <h3 className="pl-3 pt-3 text-gray-900 font-bold text-lg">{product?.title}</h3>
                    </Link>

                    {/* Product Price */}
                    <div className="w-full flex items-center space-x-3 pl-3">
                        <h4 className="text-paragraph font-medium text-lg">${product?.price}</h4>
                    </div>
                    {/* Product Price */}

                    {/* Product Rating */}
                    {/* <div className="flex items-center space-x-3 pl-3 pb-3">
                        <span className="flex"> 
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                        </span>
                        <div>
                            <p className="text-paragraph">(150)</p>
                        </div>
                    </div>  */}
                    {/* Product Rating*/}
                    <div className="w-full pl-3 pr-3 pt-2">
                        <button
                            onClick={() => addCart(product)}
                            className="w-full  h-13 rounded-lg bottom-0 text-gray-900 border-2 border-primary block py-1 font-medium hover:bg-accentOne hover:text-white "
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
                {/* Product description */}
            </div>
        </div>

    );
}

export default ProductCard;
