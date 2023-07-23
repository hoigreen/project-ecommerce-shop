import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import "./styles/info-style.css"

import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import { handleLoadingPage } from '../../Common';
import axios from 'axios';

const InfoCustomer = () => {
    const [user, setUser] = useState({})
    const { userID } = useParams()

    useEffect(() => {
        const fetchAPI = () => {
            document.title = "ShopTECH | Thông tin khách hàng"
            fetch(`${process.env.REACT_APP_API}/api/users/${userID}`).then(res => res.json()).then(data => {
                setUser(data)
            })
        }
        fetchAPI()
        handleLoadOptionSelected(1)
    }, [])

    const handleConfirmChange = async (e) => {
        e.preventDefault();
        const inputElements = document.querySelectorAll(".info-page__input");
        try {
            const res = await axios.put(`${process.env.REACT_APP_API}/api/admins/update-info-user/${userID}`, {
                fullname: inputElements[1].value,
                email: inputElements[2].value,
                phone: inputElements[3].value,
                address: inputElements[4].value
            });
            if (res && res.data.success) {
                alert("Cập nhật khách hàng thông tin thành công!");
                console.log(res.data)
                handleLoadingPage(1)
                window.location.reload()
            } else {
                alert("Cập nhật thông tin thất bại")
            }
        } catch (error) {
            alert(error)
        }
    };

    return (
        <>
            <AdminSidebar />
            <div id="admin-box">
                <AdminHeader />
                <div className="admin__title">
                    <label className='admin__tilte-label'>Chúc một ngày tốt lành, quản trị viên!</label>
                    <label className='admin__tilte-describe'>Trang quản lý khách hàng</label>
                </div>

                <div className='info-page__group'>
                    <div className="info-page__header">Chỉnh sửa thông tin khách hàng</div>

                    <div className="info-page__body">
                        <div className="info-page__col-1">
                            <div className="info-page__avatar">
                                <img src={user.avatarUrl || `${process.env.REACT_APP_API}/public/img-avatar-empty.png`} className="info-page__avatar-img"></img>
                            </div>
                            <label className="info-page__user-id">{user.username}</label>
                        </div>

                        <div className='info-page__col-2'>
                            <label className="info-page__title">Thông tin cá nhân</label>

                            <div className="info-page__box-info">
                                <label className="info-page__label">Mã khách hàng</label>
                                <input style={{ fontWeight: 'bold' }}
                                    readOnly
                                    className='info-page__input info-page__input--readonly'
                                    value={userID} />

                                <label className="info-page__label">Họ và tên khách hàng</label>
                                <input className='info-page__input' defaultValue={user.fullname} />

                                <label className="info-page__label">Email</label>
                                <input className='info-page__input' defaultValue={user.email} />

                                <label className="info-page__label">Số điện thoại</label>
                                <input className='info-page__input' defaultValue={user.phone} />

                                <label className="info-page__label">Địa chỉ</label>
                                <input className='info-page__input' defaultValue={user.address} />

                            </div>
                        </div>
                    </div>

                    <div className="info-page__footer">
                        <button className="info-page__btn" onClick={handleConfirmChange}>Xác nhận<i className="ti-check"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoCustomer;