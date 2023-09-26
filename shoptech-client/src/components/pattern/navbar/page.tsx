'use client'
import React from 'react'
import Container from '@mui/material/Container';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
                className="dark:invert cursor-pointer select-none bg-transparent"
                width={120}
                height={24}
              />
            </Link>

            <Link href="Tel: 00000" className="header-btn header-btn__link hide-on-mobile">
              <p className="text-sm">Hỗ trợ
                <span className="header--btn-describe">1800.4433</span>
              </p>
            </Link>
            <nav className="navbar">
              <div className="header-search">
                <input className="header-search__input" placeholder="Tìm kiếm sản phẩm..." onChange={(e) => { }}></input>
                <button className="header-search__button" onClick={
                  (e) => {
                    // if (keySearch === '') {
                    //   alert("Vui lòng điền từ khóa cần tìm!")
                    //   return;
                    // }
                    handleLoadingPage(1)
                    // window.location.href = `/search/${keySearch}`
                  }
                }>
                  <i className="fa ti-search"></i>
                </button>
              </div>

              <div className="header__btn-group">
                <button className="header-btn header-btn__cart" onClick={() => {
                  handleLoadingPage(1); window.location.href = "/cart"
                }}>
                  <div className="header-btn__red-dot">{0}</div>
                  <i className="header--btn-icon fa-solid fa-shopping-cart"></i>
                  <p className="header--btn-name hide-on-mobile" >Giỏ hàng</p>
                </button>

                <button className="header-btn hide-on-mobile" onClick={(e) => {
                  // if (auth.username) {
                  //   const elementNavOption = document.querySelector('.nav__option-box');
                  //   elementNavOption.style.display = 'block';
                  // }
                  // else {
                  //   handleLoadingPage(1)
                  //   window.location.href = "/login"
                  // }
                }}>
                  <i className="header--btn-icon fa-solid fa-user"></i>
                  <p className="header--btn-name">Thành viên</p>
                </button>

                <button className="header-btn hide-on-mobile" onClick={() => {
                  handleLoadingPage(1); window.location.href = "/order"
                }}>
                  <i className="header--btn-icon fa-solid fa-history"></i>
                  <p className="header--btn-name">Đơn hàng</p>
                </button>
                <button className="header-btn hide-on-mobile" onClick={() => {
                  handleLoadingPage(1);
                  window.location.href = "/contact"
                }}>
                  <i className="header--btn-icon fa-solid fa-question"></i>
                  <p className="header--btn-name">Liên hệ</p>
                </button>
              </div>

              <ul className="nav__option-box">
                <li className="nav__option-item" onClick={() => {
                  handleLoadingPage(1);
                  window.location.href = "/account"
                }}>Tài khoản của bạn</li>
                <li className="nav__option-item" style={{ color: "red" }} onClick={e => { }}>Đăng xuất</li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </React.Fragment >
  )
}

export default NavBar