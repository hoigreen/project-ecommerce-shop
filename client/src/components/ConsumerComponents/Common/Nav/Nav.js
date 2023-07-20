import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../context';
import { handleLoadingPage } from '../../../Common';

import "./nav.css"

const Nav = () => {
    const [countQuantity, setCountQuantity] = useState()
    const [keySearch, setKeySearch] = useState("")
    const [auth, setAuth] = useContext(AuthContext)

    useEffect(() => {
        const fetchAPI = () => {
            if (localStorage.auth)
                fetch("https://server-shoptech.onrender.com/api/users/" + JSON.parse(window.localStorage.getItem("auth")).user._id).then(res => res.json()).then(data => {
                    setCountQuantity(data.cart.length)
                })
        }
        fetchAPI()
    }, [])

    const handleLoggout = (e) => {
        e.preventDefault();
        setAuth({
            ...auth,
            username: null,
            token: '',
        });
        window.localStorage.removeItem("auth")
        window.alert("Đăng xuất tài khoản thành công")
        handleLoadingPage(1)
        setTimeout(() => {
            window.location.href = "/login";
        }, 1000)
    }

    return (
        <React.Fragment>
            <div className="nav-container">
                <div className="grid wide">
                    <nav className="navbar">
                        <div className="header--logo" onClick={(e) => {
                            e.preventDefault();
                            handleLoadingPage(1)
                            window.location.href = "/home"
                        }}>
                        </div>

                        <a href="Tel: 00000" className="header-btn header-btn__link hide-on-mobile">
                            <i className="header--btn-icon fa-solid fa-phone"></i>
                            <p className="header--btn-name">Hỗ trợ
                                <span className="header--btn-describe">1800.4433</span>
                            </p>
                        </a>
                        <div className="header-search">
                            <input className="header-search__input" placeholder="Tìm kiếm sản phẩm..." onChange={(e) => { setKeySearch(e.target.value) }}></input>
                            <button className="header-search__button" onClick={
                                (e) => {
                                    if (keySearch === '') {
                                        alert("Vui lòng điền từ khóa cần tìm!")
                                        return;
                                    }
                                    handleLoadingPage(1)
                                    window.location.href = `/search/${keySearch}`
                                }
                            }>
                                <i className="fa ti-search"></i>
                            </button>
                        </div>

                        <div className="header__btn-group">
                            <button className="header-btn header-btn__cart" onClick={() => {
                                handleLoadingPage(1); window.location.href = "/cart"
                            }}>
                                <div className="header-btn__red-dot">{countQuantity || 0}</div>
                                <i className="header--btn-icon fa-solid fa-shopping-cart"></i>
                                <p className="header--btn-name hide-on-mobile" >Giỏ hàng</p>
                            </button>

                            <button className="header-btn hide-on-mobile" onClick={(e) => {
                                if (auth.username) {
                                    const elementNavOption = document.querySelector('.nav__option-box');
                                    elementNavOption.style.display = 'block';
                                }
                                else {
                                    handleLoadingPage(1)
                                    window.location.href = "/login"
                                }
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
                            <li className="nav__option-item" style={{ color: "red" }} onClick={handleLoggout}>Đăng xuất</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Nav;