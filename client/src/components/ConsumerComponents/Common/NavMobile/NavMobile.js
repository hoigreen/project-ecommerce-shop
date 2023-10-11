import React, { memo, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav-mobile.css';
import { handleLoadingPage } from '../../../Common';
import { AuthContext } from '../../../../context';

const NavMobile = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const arrayOptions = [
    {
      path: '/home',
      icon: 'fa fa-home',
      name: 'Trang chủ',
    },
    {
      path: '/order',
      icon: 'fa-solid fa-history',
      name: 'Đơn hàng',
    },
    {
      path: '/contact',
      icon: 'fa-solid fa-question',
      name: 'Liên hệ',
    },
  ];

  useEffect(() => {
    arrayOptions.map((option, index) => {
      if (option.path === window.location.pathname) {
        document
          .querySelectorAll('.nav-mobile__btn')
          [index].classList.add('nav-mobile__btn--active');
      }
    });
  }, [window.location.pathname]);

  const handleShowList = () => {
    const elementNavOption = document.querySelector('.nav-mobile__option-list');
    elementNavOption.style.display = 'block';
  };

  const handleShowFunctionAccount = () => {
    if (!auth.username) {
      window.location.href = '/login';
    } else {
      const elementNavOption = document.querySelector(
        '.nav-mobile__option-account',
      );
      elementNavOption.style.display = 'block';
    }
  };

  const handleLoggout = (e) => {
    e.preventDefault();
    setAuth({
      ...auth,
      username: null,
      token: '',
    });
    window.localStorage.removeItem('auth');
    window.alert('Đăng xuất tài khoản thành công');
    handleLoadingPage(1);
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };
  return (
    <div className="nav-mobile">
      {arrayOptions.map((option, index) => (
        <li
          key={index}
          className="nav-mobile__btn"
          onClick={() => {
            handleLoadingPage(0.5);
            setTimeout(() => {
              window.location.href = option.path;
            }, 500);
          }}
        >
          <i className={'nav-mobile__btn-icon ' + option.icon}></i>
          <p className="nav-mobile__btn-name">{option.name}</p>
        </li>
      ))}

      <li className="nav-mobile__btn" onClick={handleShowList}>
        <i className={'nav-mobile__btn-icon fa fa-list'}></i>
        <p className="nav-mobile__btn-name">Danh mục</p>
      </li>

      <li className="nav-mobile__btn" onClick={handleShowFunctionAccount}>
        <i className={'nav-mobile__btn-icon fa fa-user'}></i>
        <p className="nav-mobile__btn-name">Tài khoản</p>
      </li>

      <ul className="nav-mobile__option-list">
        <li
          className="nav__option-item"
          onClick={() => {
            handleLoadingPage(1);
            window.location.href = '/product/smartphone';
          }}
        >
          Điện thoại
        </li>
        <li
          className="nav__option-item"
          onClick={() => {
            handleLoadingPage(1);
            window.location.href = '/product/laptop';
          }}
        >
          Máy tính xách tay
        </li>
        <li
          className="nav__option-item"
          onClick={() => {
            handleLoadingPage(1);
            window.location.href = '/product/tablet';
          }}
        >
          Máy tính bảng
        </li>
        <li
          className="nav__option-item"
          onClick={() => {
            handleLoadingPage(1);
            window.location.href = '/product/accessories';
          }}
        >
          Phụ kiện
        </li>
      </ul>

      <ul className="nav-mobile__option-account">
        <li
          className="nav__option-item"
          onClick={() => {
            handleLoadingPage(1);
            window.location.href = '/account';
          }}
        >
          Tài khoản
        </li>
        <li
          className="nav__option-item"
          onClick={() => {
            handleLoadingPage(1);
            window.location.href = '/account/info';
          }}
        >
          Thông tin cá nhân
        </li>
        <li
          className="nav__option-item"
          onClick={() => {
            handleLoadingPage(1);
            window.location.href = '/account/history';
          }}
        >
          Lịch sử mua hàng
        </li>
        <li
          className="nav__option-item"
          style={{ color: 'red' }}
          onClick={handleLoggout}
        >
          Đăng xuất
        </li>
      </ul>
    </div>
  );
};

export default memo(NavMobile);
