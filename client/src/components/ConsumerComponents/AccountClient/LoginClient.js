import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Nav, Breadcrumbs } from '../Common';
import { Toast, handleLoadingPage } from '../../Common';
import AuthContext from '../../../context/AuthContext';
import "./styles/account-client.css"

const LoginClient = () => {
    const [details, setDetails] = useState({ username: "", password: "" })
    const [auth, setAuth] = useContext(AuthContext)

    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem("auth") && auth.username) { window.location.href = '/account' }
    }, [auth])

    useEffect(() => { document.title = "ShopTECH | Đăng nhập" }, [])

    const showErrorToast = () => {
        Toast({ title: 'Đăng nhập thất bại', message: 'Tên tài khoản hoặc mật khẩu không chính xác!', type: 'error', duration: 3000 })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/users/login`, {
                username: details.username,
                password: details.password,
            });
            if (res && res.data.success) {
                localStorage.setItem('auth', JSON.stringify(res.data));
                setAuth({
                    ...auth,
                    username: res.data.user.username,
                    token: res.data.token,
                });
                console.log(res.data)
                alert("Đăng nhập thành công");
                handleLoadingPage(1)
                window.setTimeout(() => {
                    navigate('/account');
                }, 1000)
            } else {
                showErrorToast();
            }
        } catch (error) {
            console.log(error);
            showErrorToast();
        }
    };

    return (
        <React.Fragment>
            <div id="toast-with-navbar"></div>
            <Nav />
            <Breadcrumbs />
            <div className='container'>
                <div className="grid wide">
                    <div className="login-client__box">
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

                        <div className="login-client__col-2">
                            <div className="login-client__container">
                                <form className="login-client__form" onSubmit={handleSubmit}>
                                    <label className="login-client__label-login">Đăng nhập tài khoản</label>
                                    <label className="login-client__label" htmlFor="username">Vui lòng nhập tên tài khoản</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="login-client__input"
                                        onChange={e => { setDetails({ ...details, username: e.target.value }); }}
                                        value={details.username}
                                        required
                                        minLength={5}
                                        placeholder="Username ..."
                                    />

                                    <label className="login-client__label" htmlFor="password">Vui lòng nhập mật khẩu</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="login-client__input"
                                        onChange={e => setDetails({ ...details, password: e.target.value })}
                                        value={details.password}
                                        required
                                        minLength={6}
                                        placeholder="Password ..."
                                    />
                                    <a href='' className="login-client__forgot">Bạn quên mật khẩu?</a>
                                    <button className="login-client__btn">ĐĂNG NHẬP</button>
                                </form>
                                <p className="login-client__label-or">__________hoặc__________</p>

                                <div className="login-client__direct">
                                    <button className='login-client__direct-btn'>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' alt=''
                                            width='32' className="login-client__direct-img" />
                                        <label className="login-client__direct-label">Facebook</label>
                                    </button>

                                    <button className='login-client__direct-btn'>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png' alt=''
                                            width='30' className="login-client__direct-img" />
                                        <label className="login-client__direct-label">Google</label>
                                    </button>

                                    <button className='login-client__direct-btn'>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
                                            alt=''
                                            width='32' className="login-client__direct-img" />
                                        <label className="login-client__direct-label">Instagram</label>
                                    </button>
                                    <div>
                                        <label className="login-client__question">Nếu bạn chưa có tài khoản trước đây?</label>
                                        <a
                                            className="login-client__register"
                                            href='/login'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLoadingPage(1)
                                                window.setTimeout(() => {
                                                    navigate('/register');
                                                }, 1000)
                                            }}
                                        >
                                            Đăng ký ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>


    );
};

export default LoginClient;