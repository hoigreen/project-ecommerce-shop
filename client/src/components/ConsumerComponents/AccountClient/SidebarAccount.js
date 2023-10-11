import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLoadingPage } from '../../Common';
import { AuthContext } from '../../../context';

const handleLoadOptionSidebar = (index) => {
  const optionItems = document.querySelectorAll('.account__sidebar-item');
  const optionItemActive = document.querySelector(
    '.account__sidebar-item.account__sidebar-item--active',
  );
  optionItems.forEach((item, i) => {
    if (optionItemActive) {
      optionItemActive.classList.remove('account__sidebar-item--active');
    }
  });
  optionItems[index].classList.add('account__sidebar-item--active');
};

const SidebarAccount = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

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
    <div className="account__sidebar">
      <ul className="account__sidebar-list">
        <li
          className="account__sidebar-item"
          onClick={(e) => {
            handleLoadingPage(1);
            window.setTimeout(() => {
              window.location.href = '/account/';
            }, 1000);
          }}
        >
          <i className="account__sidebar-item-icon fa fa-home"></i>
          <label className="account__sidebar-label">Trang chủ</label>
        </li>
        <li
          className="account__sidebar-item"
          onClick={(e) => {
            handleLoadingPage(1);
            window.setTimeout(() => {
              navigate('/account/info');
            }, 1000);
          }}
        >
          <i className="account__sidebar-item-icon fa fa-user"></i>
          <label className="account__sidebar-label">Thông tin cá nhân</label>
        </li>
        <li
          className="account__sidebar-item"
          onClick={(e) => {
            handleLoadingPage(1);
            window.setTimeout(() => {
              navigate('/cart');
            }, 1000);
          }}
        >
          <i className="account__sidebar-item-icon fa fa-shopping-cart"></i>
          <label className="account__sidebar-label">Giỏ hàng</label>
        </li>
        <li
          className="account__sidebar-item"
          onClick={(e) => {
            handleLoadingPage(1);
            window.setTimeout(() => {
              navigate('/account/history');
            }, 1000);
          }}
        >
          <i className="account__sidebar-item-icon fa fa-history"></i>
          <label className="account__sidebar-label">Lịch sử mua hàng</label>
        </li>
        <li
          className="account__sidebar-item"
          onClick={(e) => {
            handleLoggout(e);
          }}
        >
          <i className="account__sidebar-item-icon fa fa-sign-out"></i>
          <label className="account__sidebar-label">Đăng xuất tài khoản</label>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAccount;
export { handleLoadOptionSidebar };
