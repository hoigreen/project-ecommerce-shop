import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Validator from '../../Common/Validator';
import { handleLoadingPage } from '../../Common';
import { Breadcrumbs, Nav } from '../Common';

const RegisterClient = () => {
    const [usernameRegister, setUsernameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [fullnameRegister, setFullnameRegister] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [phoneRegister, setPhoneRegister] = useState('')
    const [addressRegister, setAddressRegister] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem("auth")) { window.location.href = '/account' }
        document.title = "ShopTECH | Đăng ký"
        Validator({
            form: '#form-1',
            error: '.form-message',
            rules: [
                Validator.isRequired('#username'),
                Validator.isMinLength('#username', 5),

                Validator.isRequired('#password'),
                Validator.isMinLength('#password', 6),

                Validator.isRequired('#password_confirmation'),
                Validator.isConfirmed('#password_confirmation', () => {
                    return document.getElementById('password').value;
                }),

                Validator.isRequired('#fullname'),
                Validator.isMinLength('#fullname', 5),

                Validator.isRequired('#email'),
                Validator.isEmail('#email'),

                Validator.isRequired('#phone'),
                Validator.isMinLength('#phone', 10),
                Validator.isMaxLength('#phone', 10),

                Validator.isRequired('#address'),
                Validator.isMinLength('#address', 5),
            ]
        });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/users/register`, {
                avatarUrl: ``,
                username: String(usernameRegister),
                password: passwordRegister,
                fullname: fullnameRegister,
                email: emailRegister,
                phone: phoneRegister,
                address: addressRegister,
                cart: []
            });
            if (res && res.data.success) {
                if (res.data.message === "Tài khoản này đã đăng ký bởi người khác!") {
                    window.alert(res.data.message)
                }
                else {
                    window.alert('Đăng ký thành công! Đang quay trở lại trang đăng nhập')
                    handleLoadingPage(1)
                    window.setTimeout(() => {
                        window.location.href = '/login';
                    }, 1000)
                }
            } else {
                window.alert("Đã gặp lỗi khi đăng ký! Vui lòng thử lại")
            }
        } catch (error) {
            console.log(error);
            window.alert(error);
        }
    };

    return (
        <>
            <Nav />
            <Breadcrumbs />
            <div className='container'>
                <div className="grid wide">
                    <div className="login-client__box">
                        <div className="login-client__col-2">
                            <div className="login-client__container">
                                <form className="form" id="form-1" onSubmit={handleSubmit}>
                                    <label className="login-client__label-login">ĐĂNG KÝ TÀI KHOẢN MỚI</label>

                                    <div className="spacer"></div>

                                    <div className="form-group">
                                        <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="VD: customer01 ..."
                                            onChange={(e) => setUsernameRegister(e.target.value)}
                                            value={usernameRegister}
                                            className="form-control">
                                        </input>
                                        <span className="form-message"></span>
                                    </div>

                                    <div className="form-group form-group-2-col" style={{ paddingRight: "4px" }}>
                                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Nhập mật khẩu"
                                            onChange={(e) => setPasswordRegister(e.target.value)}
                                            value={passwordRegister}
                                            className="form-control">
                                        </input>
                                        <span className="form-message"></span>
                                    </div>

                                    <div className="form-group form-group-2-col" style={{ paddingLeft: "4px" }}>
                                        <label htmlFor="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
                                        <input
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            placeholder="Nhập lại mật khẩu"
                                            type="password"
                                            className="form-control">
                                        </input>
                                        <span className="form-message"></span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="fullname" className="form-label">Họ tên đầy đủ</label>
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            placeholder="VD: Lê Ninh ..."
                                            onChange={(e) => setFullnameRegister(e.target.value)}
                                            value={fullnameRegister}
                                            className="form-control">
                                        </input>
                                        <span className="form-message"></span>
                                    </div>

                                    <div className="form-group form-group-2-col" style={{ paddingRight: "4px" }}>
                                        <label htmlFor="email" className="form-label">Địa chỉ email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="VD: email@domain.com"
                                            onChange={(e) => setEmailRegister(e.target.value)}
                                            value={emailRegister}
                                            className="form-control">
                                        </input>
                                        <span className="form-message"></span>
                                    </div>

                                    <div className="form-group form-group-2-col" style={{ paddingLeft: "4px" }}>
                                        <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="number"
                                            maxLength="10"
                                            placeholder="VD: 0983281932 ..."
                                            onChange={(e) => setPhoneRegister(e.target.value)}
                                            value={phoneRegister}
                                            className="form-control">
                                        </input>
                                        <span className="form-message"></span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address" className="form-label">Địa chỉ liên hệ</label>
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            placeholder="VD: Hàm Nghi, TPHCM"
                                            onChange={(e) => setAddressRegister(e.target.value)}
                                            value={addressRegister}
                                            className="form-control">
                                        </input>
                                        <span className="form-message"></span>
                                    </div>

                                    <button className="login-client__btn">ĐĂNG KÝ NGAY</button>
                                </form>
                                <div className="login-client__direct">
                                    <div>
                                        <label className="login-client__question">Bạn đã là thành viên của ShopTech?</label>
                                        <a
                                            className="login-client__register"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate('/login');
                                            }}>
                                            Quay lại trang đăng nhập</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="login-client__col-1">
                            <div className="login-client__panel">
                                <div className="login-client__panel-img"></div>
                                <label className="login-client__panel-title">Trở thành thành viên</label>
                                <p className="login-client__panel-desb">Tận hưởng trải nghiệm và ưu đãi tuyệt vời khi trở thành thành viên của gia đình ShopTECH!!!</p>
                            </div>
                            <div className="login-client__panel-controll">
                                <button className="login-client__panel-btn"></button>
                                <button className="login-client__panel-btn"></button>
                                <button className="login-client__panel-btn"></button>
                                <button className="login-client__panel-btn"></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

};

export default RegisterClient;