'use client';
import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiPhoneCall, FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineHistory } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { StateContext } from '@/contexts/StateContext';

const NavBar = () => {
  const router = useRouter();
  const { isDropdownAccountNavBarOpen, toggleDropdownAccountNavBar } = useContext(StateContext);

  // write me function calculator sum 2 number

  const handleLoadingPage = (second: number) => { };

  return (
    <React.Fragment>
      <div className="shadow-sm p-2 z-index-10 text-white bg-green-700">
        <Container maxWidth="xl">
          <div className="flex items-center w-full">
            <Link href="/">
              <Image
                onClick={() => router.push('/dashboard')}
                src="/logo-navbar.png"
                alt="Vercel Logo"
                className="dark:invert cursor-pointer select-none bg-transparent object-contain"
                width={120}
                height={24}
              />
            </Link>

            <Link
              href="Tel: 00000"
              className="hidden md:flex md:justify-center relative text-sm md:items-center mx-2 text-white font-semibold bg-green-600 w-28 h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500"
            >
              <FiPhoneCall />
              <p className="ml-2 text-sm">Hỗ trợ</p>
            </Link>

            <nav className="flex w-full justify-between">
              <div className="flex items-center justify-between">
                <input
                  className="w-full rounded-lg h-12 outline-none border-none px-6 py-4 text-sm font-semibold text-green-500 bg-white"
                  placeholder="Tìm kiếm sản phẩm..."
                  onChange={(e) => { }}
                />

                <button
                  className="text-white h-12 w-14 mx-2 rounded-md bg-green-600"
                  onClick={(e) => {
                    // if (keySearch === '') {
                    //   alert("Vui lòng điền từ khóa cần tìm!")
                    //   return;
                    // }
                    handleLoadingPage(1);
                    // window.location.href = `/search/${keySearch}`
                  }}
                >
                  <FiSearch className="text-white text-2xl text-center w-full" />
                </button>
              </div>

              <div className="flex items-center flex-nowrap justify-end">
                <button
                  className="flex relative text-sm items-center md:mx-2 px-2 text-white font-semibold bg-green-600 w-fit h-12 md:px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500"
                  onClick={() => {
                    handleLoadingPage(1);
                    window.location.href = '/cart';
                  }}
                >
                  <div className="w-4 h-4 flex items-center justify-center top-1 right-2 bg-red-600 absolute rounded-full text-xs">
                    {0}
                  </div>
                  <div className="mr-2 text-xl ">
                    <BsCart className="text-center" />
                  </div>
                  <p className="hidden md:block text-sm">Giỏ hàng</p>
                </button>

                <div className="relative inline-block text-left">
                  <button
                    className="hidden md:flex text-sm items-center mx-2 text-white font-semibold bg-green-600 w-fit h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500"
                    onClick={(e) => {
                      toggleDropdownAccountNavBar();
                      // if (auth.username) {
                      //   const elementNavOption = document.querySelector('.nav__option-box');
                      //   elementNavOption.style.display = 'block';
                      // }
                      // else {
                      //   handleLoadingPage(1)
                      //   window.location.href = "/login"
                      // }
                    }}
                  >
                    <div className="mr-2 text-xl ">
                      <FaRegUser className="text-center" />
                    </div>
                    <p className="hidden md:block text-sm">Thành viên</p>
                  </button>
                  {isDropdownAccountNavBarOpen && (
                    <div className="absolute right-0 z-10 mt-4 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 hover:bg-gray-200 ">
                        <Link href="#" className="text-gray-700 font-semibold block px-4 py-2 text-sm">
                          Edit
                        </Link>
                      </div>
                      <div className="py-1 hover:bg-gray-200 ">
                        <Link href="#" className="text-gray-700 font-semibold block px-4 py-2 text-sm">
                          Archive
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  className="hidden lg:flex text-sm items-center mx-2 text-white font-semibold bg-green-600 w-fit h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500"
                  onClick={() => {
                    handleLoadingPage(1);
                    window.location.href = '/order';
                  }}
                >
                  <div className="mr-2 text-xl ">
                    <AiOutlineHistory className="text-center" />
                  </div>
                  <p className="hidden md:block text-sm">Đơn hàng</p>
                </button>
                <button
                  className="hidden lg:flex text-sm items-center mx-2 text-white font-semibold bg-green-600 w-fit h-12 px-4 py-2 outline-none border-none cursor-pointer rounded-lg hover:bg-green-500"
                  onClick={() => {
                    handleLoadingPage(1);
                    window.location.href = '/contact';
                  }}
                >
                  <div className="mr-2 text-xl ">
                    <BiSupport className="text-center" />
                  </div>
                  <p className="hidden md:block text-sm">Liên hệ</p>
                </button>
              </div>

              {/* <ul className="nav__option-box">
                <li className="nav__option-item" onClick={() => {
                  handleLoadingPage(1);
                  window.location.href = "/account"
                }}>Tài khoản của bạn</li>
                <li className="nav__option-item" style={{ color: "red" }} onClick={e => { }}>Đăng xuất</li>
              </ul> */}
            </nav>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
