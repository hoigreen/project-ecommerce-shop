import React, { useState, useEffect } from 'react';
import './order-lookup.css';
import { Breadcrumbs, Footer, Nav } from '../Common';
import { Toast, handleLoadingPage } from '../../Common';
import axios from 'axios';

const OrderLookup = () => {
    const [order, setOrder] = useState(null)
    const [phone, setPhone] = useState('')
    const [orderID, setOrderID] = useState('')
    const [lists, setLists] = useState([])
    const [totalPriceOld, setTotalPriceOld] = useState()
    const [countTotalPrice, setCountTotalPrice] = useState()

    useEffect(() => {
        document.title = "ShopTECH | Tra cứu đơn hàng"

        // show thông tin tổng tiền giỏ hàng
        let countTotalPriceOld = 0
        let countPriceAll = 0
        lists.map((item, index) => {
            if (item) {
                countTotalPriceOld += Number(item.price) * (100 + item.percent) / 100 * item.quantity;
                countPriceAll += Number(item.price) * item.quantity;
            }

        })
        setTotalPriceOld(countTotalPriceOld)
        setCountTotalPrice(countPriceAll)
    }, [order])

    const showErrorToast = () => {
        Toast({ title: 'Tìm kiếm thất bại', message: 'Không tìm thấy đơn hàng mà bạn muốn!', type: 'error', duration: 3000 })
    }

    const handleLookup = async (e) => {
        e.preventDefault()
        handleLoadingPage(10)
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/orders/${orderID}`);
            document.querySelector(".modal__cover").classList.remove("modal--active")
            setOrder(res.data)
            setLists(res.data.lists)
            document.querySelector(".order-lookup__box").style.display = "none"
        } catch (error) {
            alert(error)
            console.error(error);
        }
    }

    return (
        <>
            <Nav />
            <Breadcrumbs />
            <div id="toast-with-navbar"></div>
            <div className="container">
                <div className="grid wide">
                    <div className="order-lookup__box">
                        <label className="order-lookup__box-header">TRA CỨU ĐƠN HÀNG</label>
                        <label className="order-lookup__box-label">Số điện thoại</label>
                        <input style={{ fontWeight: 'bold', color: 'green' }}
                            className="order-lookup__box-input" type="phone"
                            required
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                        >
                        </input>
                        <label className="order-lookup__box-label">Mã đơn hàng</label>

                        <input style={{ textTransform: "uppercase" }}
                            className="order-lookup__box-input"
                            type="text"
                            required
                            value={orderID}
                            onChange={(e) => { setOrderID(e.target.value) }}
                        >
                        </input>
                        <button className="order-lookup__box-btn" onClick={handleLookup}>TRA CỨU</button>
                    </div>

                    <div className="order-result__box">
                        {order && <div className="cart__container">
                            <div className="cart__header">
                                <h1 className="cart__title" style={{ padding: "30px 0" }}>THÔNG TIN ĐƠN HÀNG</h1>

                                <ul className="cart-confirm__list-info">
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Mã đơn hàng của bạn:</label>
                                        <p className='cart-confirm__data' style={{ color: "red" }}>{orderID}</p>
                                    </li>
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Người đặt hàng:</label>
                                        <p className='cart-confirm__data' style={{ color: 'green' }} >{order.fullname}</p>
                                    </li>
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Email:</label>
                                        <p className='cart-confirm__data' style={{ fontWeight: 400 }} >{order.email}</p>
                                    </li>
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Số điện thoại:</label>
                                        <p className='cart-confirm__data' style={{ fontWeight: 600 }} >{order.phone}</p>
                                    </li>
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Hình thức nhận hàng:</label>
                                        <p className='cart-confirm__data' style={{ fontWeight: 400 }}>{order.method}</p>
                                    </li>
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Địa chỉ nhận hàng:</label>
                                        <p className='cart-confirm__data' style={{ fontWeight: 400 }}>{order.address}</p>
                                    </li>
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Ghi chú:</label>
                                        <p className='cart-confirm__data' style={{ fontWeight: 400, fontSize: "1.6rem", fontStyle: "italic" }}>"{order.note}"</p>
                                    </li>
                                    <li className="cart-confirm__item">
                                        <label className='cart-confirm__label'>Trạng thái đơn hàng:</label>
                                        <p className='cart-confirm__data' style={{ fontWeight: 600, color: "blue" }}>{order.status}</p>
                                    </li>
                                </ul>

                                <ul className='cart-confirm__list'>
                                    <label className="detail-price__header">Chi tiết sản phẩm</label>
                                    {lists && lists.map((item, i) => (
                                        <li className="cart-confirm__item-product" key={i}>
                                            <img className='cart-confirm__item-product-img' src={item.imageLink}></img>
                                            <div className='cart-confirm__item-product-info'>
                                                <label className='cart-confirm__item-product-info-label'>{item.productName}</label>
                                                <p className='cart-confirm__item-product-info-quantity'>x{item.quantity}</p>
                                                <p className='cart-confirm__item-product-info-price'>{item.quantity} x {Number(item.price).toLocaleString()} đ = {Number(item.quantity * item.price).toLocaleString()} đ</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <ul className='cart-confirm__list'>
                                    <label className="detail-price__header">Chi tiết đơn hàng</label>
                                    <li className='detail-price__item'>
                                        <label className="detail-price__item-label">Tổng giá trị đơn hàng: </label>
                                        <span className="detail-price__item-price">{Number(totalPriceOld).toLocaleString()} đ</span>
                                    </li>

                                    {lists && lists.map((item, i) => (
                                        <li className='detail-price__item' key="${i}">
                                            <label className="detail-price__item-label">Khuyến mãi giảm cho sản phẩm #{i + 1}: </label>
                                            <span className="detail-price__item-price">- {Number(item.percent)}% = {Number(item.percent / 100 * item.price).toLocaleString()} đ</span>
                                        </li>
                                    ))}

                                    <li className='detail-price__item'>
                                        <label className="detail-price__item-label">Áp dụng mã giảm giá:</label>
                                        <span className="detail-price__item-price">- {Number(order.giftcodeApply)}% = {Number(Number(order.giftcodeApply) / 100 * Number(countTotalPrice)).toLocaleString()} đ</span>
                                    </li>

                                    <li className='detail-price__item'>
                                        <label className="detail-price__item-label">Phí vận chuyển:</label>
                                        <span className="detail-price__item-price">29,000 đ</span>
                                    </li>
                                    <li className='detail-price__item'>
                                        <label className="detail-price__item-label">Giảm giá phí vận chuyển:</label>
                                        <span className="detail-price__item-price">- 100% = - 29,000 đ</span>
                                    </li>

                                    <li className='detail-price__item detail-price__item-total'>
                                        <label className="detail-price__item-label">Thành tiền</label>
                                        <span className="detail-price__item-price" >{Number(countTotalPrice * Number((100 - Number(order.giftcodeApply)) / 100)).toLocaleString()} đ</span>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <Footer />
            <p className='app-copyright'>©️ Bản quyền thuộc ShopTECH - năm 2023 <br />
                Địa chỉ: 70 Tô Ký, phường Tân Chánh Hiệp. Quận 12, Thành phố Hồ Chí Minh.</p>
        </>

    )
}

export default OrderLookup