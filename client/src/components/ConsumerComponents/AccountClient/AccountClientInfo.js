import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarAccount, { handleLoadOptionSidebar } from './SidebarAccount';
import { Breadcrumbs, Nav } from '../Common';
import { changeImage, handleLoadingPage } from '../../Common';

const AccountClientInfo = ({ socket }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchAPIs = () => {
            fetch(`http://localhost:4000/api/users/${JSON.parse(window.localStorage.getItem('auth')).user._id}`).then(res => res.json()).then(data => {
                setUser(data)
            })
        }
        fetchAPIs()
        handleLoadOptionSidebar(1)
    }, [])

    const handleEditInfo = async (e) => {
        e.preventDefault()
        const avatarUrl = document.querySelector(".account__box-info-avatar").getAttribute("src")
        const inputElements = document.querySelectorAll(".account__box-info-input")
        if (window.confirm("Bạn muốn sửa đổi thông tin cá nhân!") == true) {
            try {
                const res = await axios.put(`${process.env.REACT_APP_API}/api/users/update/${JSON.parse(window.localStorage.getItem('auth')).user._id}`, {
                    avatarUrl: avatarUrl,
                    fullname: inputElements[0].value,
                    email: inputElements[1].value,
                    phone: inputElements[2].value,
                    address: inputElements[3].value
                });
                if (res && res.data.success) {
                    alert("Cập nhật thông tin thành công!");
                    handleLoadingPage(1)
                    window.setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                } else {
                    alert("Cập nhật thông tin thất bại")
                }
            } catch (error) {
                alert(error)
            }
        }
    }

    return (
        <>
            <Nav />
            <Breadcrumbs />
            <div className="container">
                <div className="grid wide">
                    <div className="account-info__container">
                        <SidebarAccount socket={socket} />
                        <div className="account__box">
                            <div className="account__box-info">
                                <div className="account__box-info-container">
                                    <img className="account__box-info-avatar" src={user.avatarUrl || "http://localhost:4000/public/img-avatar-empty.png"}></img>
                                    <input type='file' id="avatar-change" onChange={(e) => { changeImage() }} hidden></input>
                                    <label className="account__box-info-avatar-btn" htmlFor="avatar-change">Thay đổi Avatar</label>
                                </div>

                                <label className="account__box-info-label">Xin chào</label>
                                <label className="account__box-info-fullname">{user.fullname}</label>
                                <label className="account__box-info-header">THÔNG TIN CÁ NHÂN</label>

                                <label className="account__box-info-title">Họ và tên đầy đủ:</label>
                                <input className="account__box-info-input" defaultValue={user.fullname} name="fullname" />

                                <label className="account__box-info-title">Email:</label>
                                <input className="account__box-info-input" defaultValue={user.email} name="emai" />

                                <label className="account__box-info-title">Số điện thoại:</label>
                                <input className="account__box-info-input" type="text" defaultValue={user.phone} name="phone" />

                                <label className="account__box-info-title">Địa chỉ liên hệ:</label>
                                <input className="account__box-info-input" defaultValue={user.address} name="address" />

                                <button className="account__box-info-btn" onClick={handleEditInfo}>Cập nhật thông tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountClientInfo