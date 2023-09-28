'use client'
import React from 'react'
import Container from '@mui/material/Container';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@mui/material';
import { Search } from '@mui/icons-material';
import { FiSearch } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineHistory } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { Button } from "@material-tailwind/react";

const NavBar = () => {
  const router = useRouter()

  const handleLoadingPage = (second: number) => {

  }
  return (
    <React.Fragment>
      <div className="shadow-sm p-2 z-index-10 text-white bg-green-700">
        <Container maxWidth='xl'>
          <div className='flex items-center w-full'>
            <Link href='/'>
              <Image
                onClick={() => router.push('/dashboard')}
                src="/logo-navbar.png"
                alt="Vercel Logo"
                className="dark:invert cursor-pointer select-none bg-transparent object-contain"
                width={120}
                height={24}
              />
            </Link>

            <Link href="Tel: 00000" className="flex decoration-none text-center text-white font-bold bg-green-600 text-md rounded-lg h-fit w-fit px-4 py-2 mx-2 hover:bg-green-500 sm:none">
              <p className="text-sm">Hỗ trợ
                <span className="block font-semibold text-xs pt-1">1800.4433</span>
              </p>
            </Link>

            <nav className="flex w-full justify-between">
              <div className="flex items-center justify-between">
                <input
                  className="w-full rounded-lg h-12 outline-none border-none px-6 py-4 text-sm font-semibold text-green-500 bg-white"
                  placeholder="Tìm kiếm sản phẩm..."
                  onChange={(e) => { }}
                />

                <button className="text-white h-12 w-14 mx-2 rounded-md bg-green-600" onClick={
                  (e) => {
                    // if (keySearch === '') {
                    //   alert("Vui lòng điền từ khóa cần tìm!")
                    //   return;
                    // }
                    handleLoadingPage(1)
                    // window.location.href = `/search/${keySearch}`
                  }
                }>
                  <FiSearch className='text-white text-2xl text-center w-full' />
                </button>
              </div>

              <div className="flex items-center flex-nowrap justify-end">
                <button className="flex relative text-sm items-center mx-2 text-white font-semibold bg-green-600 w-fit h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500" onClick={() => {
                  handleLoadingPage(1); window.location.href = "/cart"
                }}>
                  <div className="w-4 h-4 flex items-center justify-center top-1 right-2 bg-red-600 absolute rounded-full text-xs">{0}</div>
                  <div className="mr-2 text-xl"><BsCart /></div>
                  <p className="header--btn-name" >Giỏ hàng</p>
                </button>

                <button
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex text-sm items-center mx-2 text-white font-semibold bg-green-600 w-fit h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500"
                  onClick={(e) => {
                    // if (auth.username) {
                    //   const elementNavOption = document.querySelector('.nav__option-box');
                    //   elementNavOption.style.display = 'block';
                    // }
                    // else {
                    //   handleLoadingPage(1)
                    //   window.location.href = "/login"
                    // }
                  }}>
                  <div className="mr-2 text-xl"><FaRegUser /></div>
                  <p className="header--btn-name">Thành viên</p>
                </button>

                <button className="flex text-sm items-center mx-2 text-white font-semibold bg-green-600 w-fit h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500" onClick={() => {
                  handleLoadingPage(1); window.location.href = "/order"
                }}>
                  <div className="mr-2 text-xl"><AiOutlineHistory /></div>
                  <p className="header--btn-name">Đơn hàng</p>
                </button>
                <button className="flex text-sm items-center mx-2 text-white font-semibold bg-green-600 w-fit h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500" onClick={() => {
                  handleLoadingPage(1);
                  window.location.href = "/contact"
                }}>
                  <div className="mr-2 text-xl"><BiSupport /></div>
                  <p className="header--btn-name">Liên hệ</p>
                </button>
              </div>

              {/* <ul className="nav__option-box">
                <li className="nav__option-item" onClick={() => {
                  handleLoadingPage(1);
                  window.location.href = "/account"
                }}>Tài khoản của bạn</li>
                <li className="nav__option-item" style={{ color: "red" }} onClick={e => { }}>Đăng xuất</li>
              </ul> */}

              <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                </div>
              </div>
            </nav>
          </div>
        </Container>
      </div>
    </React.Fragment >
  )
}

export default NavBar