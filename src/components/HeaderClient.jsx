
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaUser, FaYoutube } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Banner from '../assets/banner.png'

const HeaderClient = () => {
    return (
        <>
            <div className='flex justify-center items-center bg-pink-100 text-pink-400 py-1'>🎉 Miễn phí vận chuyển cho đơn hàng trên 500.000đ</div>

            <header>

                <div className=' flex justify-around py-3 items-center  '>
                    <div className='text-2xl font-bold text-pink-500'> Elegant Dress</div>
                    <div className='flex justify-center space-x-5 '>

                        <a href="" className=' hover:text-pink-400'>Trang chủ</a>

                        <a href="" className=' hover:text-pink-400'>Sản phẩm</a>

                        <a href="" className=' hover:text-pink-400'>Danh mục</a>

                        <a href="" className=' hover:text-pink-400'>Blog</a>

                        <a href="" className=' hover:text-pink-400'>Liên hệ</a>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 max-w-md bg-white">
                        <i className="fa-solid fa-magnifying-glass mr-2 text-gray-400"></i>
                        <input type="text" placeholder='Tìm kiếm ở đây' className="outline-none w-full bg-transparent text-sm" />
                    </div>

                    <div className='p-2 flex flex-nowrap gap-10'>
                        <FaUser />
                        <FaRegHeart />
                        <FiShoppingBag />

                    </div>
                </div>
            </header>

                <section>
                    <img src={Banner} className='' alt="" />
                </section>

                <section>
                    <div className='flex justify-center items-center gap-16'>
                        <a href="" className='flex items-center  gap-1'><FaFacebookF /> FaceBook</a>
                        <a href="" className='flex items-center  gap-1'><FaTiktok /> TikTok</a>
                        <a href="" className='flex items-center  gap-1'><FaInstagram  /> Instagram</a>
                        <a href="" className='flex items-center  gap-1'><FaYoutube  /> Youtube</a>
                        <a href="" className='flex items-center  gap-1'><FaTwitter  /> Twitter</a>
                    </div>
                </section>

        </>
    )
}

export default HeaderClient