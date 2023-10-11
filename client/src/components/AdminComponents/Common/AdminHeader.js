import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLoadingPage } from '../../Common';
import AuthAdminContext from '../../../context/AuthAdminContext';

const AdminHeader = () => {
  const [authAdmin, setAuthAdmin] = useContext(AuthAdminContext);
  const [admin, setAdmin] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = () => {
      fetch(
        `${process.env.REACT_APP_API}/api/admins/${
          JSON.parse(window.localStorage.getItem('authAdmin')).admin._id
        }`,
      )
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data);
        });
    };
    fetchAPI();
  }, []);

  const handleNevigateInfo = () => {
    handleLoadingPage(1);
    window.setTimeout(() => {
      navigate(`/admin/info-admin`);
    }, 1000);
  };

  const LogOut = (e) => {
    e.preventDefault();
    setAuthAdmin({ adminName: null, token: '' });
    window.localStorage.removeItem('authAdmin');
    window.alert('Đăng xuất tài khoản thành công');
    handleLoadingPage(1);
    window.setTimeout(() => {
      window.location.href = `/admin`;
    }, 1000);
  };

  return (
    <React.Fragment>
      <div className="admin__header">
        <div className="admin__header-title">
          Trang quản trị hệ thống ShopTECH
        </div>
        <div className="admin__header-admin">
          <div className="admin__header-info">
            Xin chào,
            <span className="admin__header-name">{admin.fullname}</span>
            --
          </div>

          <img src={admin.avatarUrl} className="admin__header-avatar"></img>

          <div className="admin__header-option">
            <div
              className="admin__header-option-item"
              onClick={handleNevigateInfo}
            >
              Thông tin cá nhân
            </div>
            <div
              className="admin__header-option-item"
              onClick={LogOut}
              style={{ color: 'red', fontWeight: 600 }}
            >
              Đăng xuất
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminHeader;
