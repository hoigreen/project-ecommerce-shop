import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Nav } from '../Common';
import { handleLoadingPage } from '../../Common';

const CartInfo = () => {
    const [user, setUser] = useState({})

    const [fullnameEdit, setFullNameEdit] = useState('')
    const [emailEdit, setEmailEdit] = useState('')
    const [phoneEdit, setPhoneEdit] = useState('')
    const [addressEdit, setAddressEdit] = useState('')
    const [noteEdit, setNoteEdit] = useState('')
    const [methodReceive, setMethodReceive] = useState('')

    const [cartUser, setCartUser] = useState([])
    const [countTotalPrice, setCountTotalPrice] = useState()


    useEffect(() => {
        document.title = "ShopTECH | Thông tin đặt hàng"
        const fetchAPIs = () => {
            fetch(`https://server-shoptech.onrender.com/api/users/${JSON.parse(window.localStorage.getItem('auth')).user._id}`).then(res => res.json()).then(data => {
                setUser(data)
                setCartUser(data.cart)
            })
        }
        fetchAPIs()
    }, [])

    useEffect(() => {
        // show thông tin tổng tiền giỏ hàng
        let countPriceAll = 0
        cartUser.map((cartItem, index) => {
            if (cartItem) countPriceAll += Number(cartItem.price) * cartItem.quantity;
        })
        setCountTotalPrice(countPriceAll)

    })

    const handleCheckDefaultInfo = () => {
        const checkboxDefaultInfo = document.querySelector(".cart-info__input-default-info")
        const inputElement = document.querySelectorAll(".cart-info__input")
        if (checkboxDefaultInfo.checked) {
            inputElement[0].value = `${user.fullname}`
            inputElement[1].value = `${user.email}`
            inputElement[2].value = `${user.phone}`
            setFullNameEdit(user.fullname)
            setEmailEdit(user.email)
            setPhoneEdit(user.phone)
        }
        else {
            inputElement[0].value = ``
            inputElement[1].value = ``
            inputElement[2].value = ``
            setFullNameEdit('')
            setEmailEdit('')
            setPhoneEdit('')
        }
    }

    const handleCheckMethodReceiveAtStore = (e) => {
        const inputElement = document.querySelectorAll(".cart-info__input")
        const listRadio = document.querySelectorAll(".cart-info__input-radio")
        const listDescribe = document.querySelectorAll(".cart-info__input-radio-describe")
        if (e.target.checked) {
            inputElement[3].classList.add("cart-info__input--disabled")
            inputElement[3].disabled = true
            listDescribe[3].classList.add("cart-info__input-radio-describe--disabled")
            listRadio[3].disabled = true
            setMethodReceive('Nhận tại cửa hàng')
        }
    }

    const handleCheckMethodReceiveAtAddress = (e) => {
        const inputElement = document.querySelectorAll(".cart-info__input")
        const listRadio = document.querySelectorAll(".cart-info__input-radio")
        const listDescribe = document.querySelectorAll(".cart-info__input-radio-describe")
        if (e.target.checked) {
            inputElement[3].classList.remove("cart-info__input--disabled")
            inputElement[3].disabled = false
            listDescribe[3].classList.remove("cart-info__input-radio-describe--disabled")
            listRadio[3].disabled = false
            setMethodReceive('Nhận hàng tại nhà')
        }
    }

    const handleCheckDefaultAddress = () => {
        const checkboxDefaultAddress = document.querySelector(".cart-info__input-default-address")
        const inputElement = document.querySelectorAll(".cart-info__input")
        if (checkboxDefaultAddress.checked) {
            inputElement[3].value = `${user.address}`
            setAddressEdit(user.address)
        }
        else {
            inputElement[3].value = ``
            setAddressEdit("")
        }
    }

    const handleNextStep = () => {
        if (fullnameEdit !== '' && emailEdit !== '' && phoneEdit !== '' && methodReceive !== '') {
            window.localStorage.setItem("fullnameCache", fullnameEdit)
            window.localStorage.setItem("emailCache", emailEdit)
            window.localStorage.setItem("phoneCache", phoneEdit)
            window.localStorage.setItem("methodCache", methodReceive)
            window.localStorage.setItem("addressCache", addressEdit)
            window.localStorage.setItem("noteCache", noteEdit)
            handleLoadingPage(1)
            window.setTimeout(() => {
                window.location.href = '/cart/info/giftcode'
            }, 1000)
        }
        else {
            alert("Vui lòng điền đầy đủ thông tin")
        }
    }

    return (
        <>
            <Nav />
            <Breadcrumbs />
            <div className="grid wide">
                <div className="container" style={{ paddingBottom: "200px" }}>
                    <div className="cart__container">
                        <div className="cart__header">
                            <button className="cart__btn-cancel" onClick={() => { window.location.href = "/cart" }}>
                                <i className="cart__btn-cancel-icon fa fa-arrow-left"></i>Trở lại giỏ hàng
                            </button>
                            <h1 className="cart__title">THÔNG TIN ĐẶT HÀNG CỦA BẠN</h1>
                        </div>


                        <div className="form cart-info__form" id="form-info-cart">
                            <div className="spacer"></div>

                            <div className="cart-info__group">
                                <label className="cart-info__label">Thông tin cá nhân</label>
                                <div className="form-group">
                                    <input style={{ color: "green", fontWeight: "500" }}
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        placeholder="Họ và tên của bạn ... (Không được bỏ trống)"
                                        onChange={(e) => setFullNameEdit(e.target.value)}
                                        defaultValue={window.localStorage.getItem("fullnameCache")}
                                        className="form-control cart-info__input">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Email ... (Không được bỏ trống)"
                                        onChange={(e) => setEmailEdit(e.target.value)}
                                        defaultValue={window.localStorage.getItem("emailCache")}
                                        className="form-control cart-info__input">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        placeholder="Nhập số điện thoại (Không được để trống)"
                                        onChange={(e) => setPhoneEdit(e.target.value)}
                                        defaultValue={window.localStorage.getItem("phoneCache")}
                                        className="form-control cart-info__input">
                                    </input>
                                </div>
                                <div className="cart-info__input-radio-container">
                                    <input name="info-default" type="checkbox" className="cart-info__input-radio cart-info__input-default-info" onClick={handleCheckDefaultInfo}></input>
                                    <label className='cart-info__input-radio-describe' style={{ color: 'blue' }}>Sử dụng thông tin cá nhân mặc định</label>
                                </div>
                            </div>

                            <div className="cart-info__group">
                                <label className="cart-info__label">Chọn hình thức nhận hàng</label>
                                <div className="cart-info__input-radio-container">
                                    <input name="info-default" type="radio" className="cart-info__input-radio" onClick={handleCheckMethodReceiveAtStore}></input>
                                    <label className='cart-info__input-radio-describe'>Nhận tại cửa hàng</label>
                                </div>

                                <div className="cart-info__input-radio-container">
                                    <input name="info-default" type="radio" className="cart-info__input-radio" onClick={handleCheckMethodReceiveAtAddress}></input>
                                    <label className='cart-info__input-radio-describe'>Giao hàng tận nơi (Trong vòng 1h)</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="Nhập địa chỉ nhận hàng (Bắt buộc)"
                                        onChange={(e) => setAddressEdit(e.target.value)}
                                        defaultValue={window.localStorage.getItem("addressCache")}
                                        className="form-control cart-info__input cart-info__input--disabled"
                                        disabled>
                                    </input>
                                </div>
                                <div className="cart-info__input-radio-container">
                                    <input name="info-default" type="checkbox" className="cart-info__input-radio cart-info__input-default-address" onClick={handleCheckDefaultAddress}></input>
                                    <label className='cart-info__input-radio-describe cart-info__input-radio-describe--red cart-info__input-radio-describe--disabled'>Sử dụng thông tin địa chỉ mặc định</label>
                                </div>
                            </div>

                            <div className="cart-info__group">
                                <label className="cart-info__label">Ghi chú thêm</label>
                                <div className="form-group">
                                    <input
                                        id="note"
                                        name="note"
                                        type="text  "
                                        placeholder="Ghi chú (Tùy chọn)"
                                        onChange={(e) => setNoteEdit(e.target.value)}
                                        defaultValue={window.localStorage.getItem("noteCache")}
                                        className="form-control cart-info__input">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="block-process" style={{ marginTop: '25px' }}>
                    <li className="block-process__item block-process__item--active">
                        <i className='block-process__item-icon block-process__item-icon--active fa fa-shopping-cart '></i>
                        <label className='block-process__item-label'>Chọn sản phẩm</label>
                    </li>
                    <i className='block-process__item-arrow block-process__item-arrow--active'>-</i>

                    <li className="block-process__item block-process__item--active">
                        <i className='block-process__item-icon fa fa-user block-process__item-icon--active'></i>
                        <label className='block-process__item-label'>Thông tin đơn hàng</label>
                    </li>
                    <i className='block-process__item-arrow block-process__item-arrow--active'>-</i>

                    <li className="block-process__item">
                        <i className='block-process__item-icon fa fa-tag'></i>
                        <label className='block-process__item-label'>Mã khuyến mãi</label>
                    </li>
                    <i className='block-process__item-arrow'>-</i>

                    <li className="block-process__item">
                        <i className='block-process__item-icon fa fa-check'></i>
                        <label className='block-process__item-label'>Xác nhận đơn hàng</label>
                    </li>
                    <i className='block-process__item-arrow'>-</i>

                    <li className="block-process__item">
                        <i className='block-process__item-icon fa fa-credit-card'></i>
                        <label className='block-process__item-label'>Thanh toán</label>
                    </li>
                </ul>

                <div className="cart__control-container">
                    <div className="cart__control-total">
                        <label className="cart__control-total-label">Tổng tiền giỏ hàng:</label>
                        <p className="cart__control-total-price">{Number(countTotalPrice).toLocaleString() || 0} đ</p>
                    </div>
                    <div className='cart__control-box'>
                        <button className="cart__control-btn cart__control-btn--payment" onClick={(e) => { handleNextStep() }}>Bước tiếp theo</button>
                        <button className="cart__control-btn cart__control-btn--more" style={{ width: "100%" }} onClick={(e) => { window.location.href = "/cart/" }}>Quay lại trang thông tin giỏ hàng</button>
                    </div>
                </div>
            </div>
        </>
    );

};

export default CartInfo;