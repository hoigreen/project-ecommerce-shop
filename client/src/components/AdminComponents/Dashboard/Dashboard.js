import React, { useState, useEffect } from 'react';

import AdminHeader from '../Common/AdminHeader'
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar'
import "./dashboard-style.css"

const Dashboard = () => {
    const [admins, setAdmins] = useState([])
    const [countAdmin, setCountAdmin] = useState(0)
    const [countProduct, setCountProduct] = useState(0)
    const [countUser, setCountUser] = useState(0)
    const [countPromotes, setCountPromotes] = useState(0)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPIs = () => {
            fetch(`http://localhost:4000/api/admins`).then(res => res.json()).then(data => {
                setAdmins(data)
                setCountAdmin(data.length)
                setLoading(false)
            });
            fetch(`http://localhost:4000/api/users`).then(res => res.json()).then(data => {
                setCountUser(data.length)
            });
            fetch(`http://localhost:4000/api/products`).then(res => res.json()).then(data => {
                setCountProduct(data.length)
            });
            fetch(`http://localhost:4000/api/promotes`).then(res => res.json()).then(data => {
                setCountPromotes(data.length)
            });
        }
        fetchAPIs()
        handleLoadOptionSelected(0)
    }, [])

    return (
        <div className='admin__container'>
            <AdminSidebar />
            <div id="admin-box">
                <AdminHeader />

                <div className="admin__title">
                    <label className='admin__tilte-label'>Chúc một ngày tốt lành, quản trị viên!</label>
                    <label className='admin__tilte-describe'>Trang thống kê</label>
                </div>

                <div className="dash__counting">
                    <div className="dash__counting-item">
                        <div className="dash__counting-content">
                            <div className='dash__counting-number' style={{ color: "red" }}>{countUser}</div>
                            <div className='dash__counting-describe'>Số lượng khách hàng</div>
                        </div>
                        <i className='dash__counting-icon fa fa-users'></i>

                    </div>

                    <div className="dash__counting-item">
                        <div className="dash__counting-content">
                            <div className='dash__counting-number' style={{ color: "green" }}>{countProduct}</div>
                            <div className='dash__counting-describe'>Số lượng sản phẩm</div>
                        </div>
                        <i className='dash__counting-icon fa fa-list'></i>

                    </div>

                    <div className="dash__counting-item">
                        <div className="dash__counting-content">
                            <div className='dash__counting-number' style={{ color: "blue" }}>{countPromotes}</div>
                            <div className='dash__counting-describe'>Số lượng khuyến mãi</div>
                        </div>
                        <i className='dash__counting-icon fa fa-tag'></i>

                    </div>

                    <div className="dash__counting-item dash__counting-item--none-border">
                        <div className="dash__counting-content">
                            <div className='dash__counting-number' style={{ color: "violet" }}>{countAdmin}</div>
                            <div className='dash__counting-describe'>Quản trị viên</div>
                        </div>
                        <i className='dash__counting-icon fa fa-user'></i>
                    </div>
                </div>

                <div className='admin__group'>
                    <label className='dash__group-title'>Danh sách quản trị viên</label>

                    <div className='admin__list'>
                        {loading ? <p>Đang kết nối đến server ... </p> : admins.map((admin, index) => (
                            <div className='admin__item' key={index}>
                                <label className='admin__item-id'>ADMIN {index + 1}</label>
                                <div className='admin__item-avatar'>
                                    <img src={admin.avatarUrl} className='admin__item-img'></img>
                                </div>
                                <label className='admin__item-admin-name'>{admin.adminName}</label>

                                <div className='admin__item-info'>
                                    <label className='admin__item-info-label'>Họ và tên:</label>
                                    <p className='admin__item-info-content'>{admin.fullname}</p>
                                </div>
                                <div className='admin__item-info'>
                                    <label className='admin__item-info-label'>Email:</label>
                                    <p className='admin__item-info-content'>{admin.email || "Trống!"}</p>
                                </div>
                                <div className='admin__item-info'>
                                    <label className='admin__item-info-label'>Số điện thoại: </label>
                                    <p className='admin__item-info-content'>{admin.phone || "Trống!"}</p>
                                </div>
                                <div className='admin__item-info'>
                                    <label className='admin__item-info-label'>Địa chỉ:</label>
                                    <p className='admin__item-info-content'>{admin.address || "Trống!"} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;