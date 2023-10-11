import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Toast, handleLoadingPage } from '../../Common';
import { Breadcrumbs, Nav } from '../Common';
import axios from 'axios';

const Payment = ({ socket }) => {
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState('');
  const [cartUser, setCartUser] = useState([]);

  const [orders, setOrders] = useState([]);
  const [timeOrder, setTimeOrder] = useState('');

  useEffect(() => {
    document.title = 'ShopTECH | Thanh toán đơn hàng';
    const fetchAPIs = () => {
      fetch(
        `https://server-shoptech.onrender.com/api/users/${
          JSON.parse(window.localStorage.getItem('auth')).user._id
        }`,
      )
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setCartUser(data.cart);
        });

      fetch('https://server-shoptech.onrender.com/api/orders')
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    };
    fetchAPIs();
  }, []);

  const showSuccessMessage = () => {
    Toast({
      title: 'ĐẶT HÀNG THÀNH CÔNG',
      message:
        'Đơn hàng của bạn đã được xác nhận, vui lòng kiểm tra đơn hàng trong tài khoản của bạn nhé!',
      type: 'success',
      duration: 5000,
    });
  };
  const showErrorMessage = () => {
    Toast({
      title: 'ĐẶT HÀNG THẤT BẠI',
      message:
        'Đơn hàng của bạn đã được xác nhận, Vui lòng tạo đơn hàng khác nhé!',
      type: 'error',
      duration: 5000,
    });
  };

  const handleSelectMethod = (e) => {
    const methodItems = document.querySelectorAll('.payment__item');
    methodItems.forEach((methodItem, index) => {
      methodItem.onclick = () => {
        const methodItemActive = document.querySelector(
          '.payment__item.payment__item--active',
        );
        if (methodItemActive) {
          methodItemActive.classList.remove('payment__item--active');
          methodItem.classList.add('payment__item--active');
        } else {
          methodItem.classList.add('payment__item--active');
        }
      };
    });
  };

  const completePayment = () => {
    emailjs
      .sendForm(
        'service_tz648gc',
        'template_3r8dk79',
        document.querySelector('.form-confirm'),
        'zD-R_dG5L23lbkbpU',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    localStorage.removeItem('orderIDCache');
    localStorage.removeItem('fullnameCache');
    localStorage.removeItem('emailCache');
    localStorage.removeItem('phoneCache');
    localStorage.removeItem('methodCache');
    localStorage.removeItem('addressCache');
    localStorage.removeItem('noteCache');
    localStorage.removeItem('countTotalPriceCache');
    localStorage.removeItem('giftcodeApply');
    localStorage.removeItem('percentApply');
    localStorage.removeItem('cartGuest');

    const paymentBox = document.querySelector('.cart__container');
    var countSeconds = 15;
    const x = setInterval(() => {
      var secondLeft = document.querySelector('.payment-done__redirect-second');
      countSeconds -= 1;
      secondLeft.innerHTML = `${countSeconds} giây`;
      if (countSeconds <= 0) {
        window.location.href = '/home';
        clearInterval(x);
      }
    }, 1000);

    paymentBox.innerHTML = `
            <div class='payment-done__box'>
                <div class="payment-done__icon checkmark-circle">
                    <div class="background"></div>
                    <div class="checkmark draw"></div>
                </div>
                <label class='payment-done__label'>Thanh toán đơn hàng thành công</label>
                <p class='payment-done__describe'>Vui lòng đợi từ một chút để hệ thống xác nhận đơn hàng của bạn</p>
                <p class='payment-done__thanks'>Cám ơn bạn đã mua hàng và sử dụng dịch vụ của ShopTECH</p>
                <p class="payment-done__redirect"> Tự động chuyển hướng tới trang chủ sau <span class='payment-done__redirect-second'>${countSeconds} giây</span> ... </p>
            </div>
        `;
    document.querySelector('.cart__control-container').style.display = 'none';
    document.querySelector('.block-process').style.display = 'none';
  };

  const handleClickRemoveAll = () => {
    axios.put(
      'https://server-shoptech.onrender.com/api/users/remove-all-in-cart/' +
        JSON.parse(window.localStorage.getItem('auth')).user._id,
    );
  };

  const handleComplePayment = async (e) => {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;
    setTimeOrder(dateTime);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/orders/create`,
        {
          orderID: window.localStorage.getItem('orderIDCache'),
          owner: JSON.parse(window.localStorage.getItem('auth')).user.username,
          fullname: window.localStorage.getItem('fullnameCache'),
          email: window.localStorage.getItem('emailCache'),
          phone: window.localStorage.getItem('phoneCache'),
          method: window.localStorage.getItem('methodCache'),
          address: window.localStorage.getItem('addressCache'),
          note: window.localStorage.getItem('noteCache'),
          price: window.localStorage.getItem('countTotalPriceCache'),
          giftcodeApply: window.localStorage.getItem('percentApply'),
          time: dateTime,
          status: 'Đang giao hàng',
          lists: cartUser,
        },
      );
      if (res && res.data.success) {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API}/api/orders/create`,
            {
              orderID: window.localStorage.getItem('orderIDCache'),
              owner: JSON.parse(window.localStorage.getItem('auth')).user
                .username,
              fullname: window.localStorage.getItem('fullnameCache'),
              email: window.localStorage.getItem('emailCache'),
              phone: window.localStorage.getItem('phoneCache'),
              method: window.localStorage.getItem('methodCache'),
              address: window.localStorage.getItem('addressCache'),
              note: window.localStorage.getItem('noteCache'),
              price: window.localStorage.getItem('countTotalPriceCache'),
              giftcodeApply: window.localStorage.getItem('percentApply'),
              time: dateTime,
              status: 'Đang giao hàng',
              lists: cartUser,
            },
          );
          if (res && res.data.success) {
            handleClickRemoveAll();
            handleLoadingPage(2);
            setTimeout(() => {
              completePayment();
            }, 2000);
            showSuccessMessage();
          } else {
            window.alert('Đã gặp lỗi khi tạo! Vui lòng thử lại');
          }
        } catch (error) {
          console.log(error);
          window.alert(error);
        }
      } else {
        window.alert('Đã gặp lỗi khi tạo! Vui lòng thử lại');
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
      <div id="toast-with-navbar"></div>
      <div className="grid wide">
        <div className="container" style={{ paddingBottom: '200px' }}>
          <div className="cart__container">
            <div className="cart__header">
              <button
                className="cart__btn-cancel"
                onClick={() => {
                  window.location.href = '/cart/info/giftcode/confirm';
                }}
              >
                <i className="cart__btn-cancel-icon fa fa-arrow-left"></i>Trở
                lại trang trước
              </button>
              <h1 className="cart__title">THANH TOÁN ĐƠN HÀNG</h1>

              <ul className="cart-confirm__list-info">
                <li className="cart-confirm__item">
                  <label className="cart-confirm__label">
                    Mã đơn hàng của bạn:
                    <span className="cart-confirm__label-span">
                      (Hãy lưu lại mã đơn hàng nhé)
                    </span>
                  </label>
                  <p className="cart-confirm__data" style={{ color: 'green' }}>
                    {window.localStorage.getItem('orderIDCache')}
                  </p>
                </li>
                <li className="cart-confirm__item">
                  <label className="cart-confirm__label">
                    Tổng số tiền thanh toán:
                  </label>
                  <p className="cart-confirm__data" style={{ color: 'red' }}>
                    {Number(
                      window.localStorage.getItem('countTotalPriceCache'),
                    ).toLocaleString()}{' '}
                    đ
                  </p>
                </li>
              </ul>

              <ul className="cart-confirm__list">
                <label className="detail-price__header">
                  Hình thức thanh toán
                </label>
                <ul className="payment__list">
                  <li
                    className="payment__item payment__item--active"
                    onClick={handleSelectMethod}
                  >
                    <label className="payment__item-label">
                      Thanh toán khi nhận hàng
                    </label>
                    <img
                      className="payment__item-img"
                      src="https://cellphones.com.vn/cart/_nuxt/img/COD.7245762.png"
                      alt=""
                    ></img>
                  </li>

                  <li className="payment__item" onClick={handleSelectMethod}>
                    <label className="payment__item-label">
                      Thanh toán qua ZaloPay
                    </label>
                    <img
                      className="payment__item-img"
                      src="https://cellphones.com.vn/cart/_nuxt/img/zalopay.08ce522.png"
                      alt=""
                    ></img>
                  </li>

                  <li className="payment__item" onClick={handleSelectMethod}>
                    <label className="payment__item-label">
                      Thanh toán qua VNPay
                    </label>
                    <img
                      className="payment__item-img"
                      src="https://cellphones.com.vn/cart/_nuxt/img/vnpay.c0bd59b.png"
                      alt=""
                    ></img>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <ul
          className="block-process block-process-payment--lower"
          style={{ marginTop: '20px' }}
        >
          <li className="block-process__item block-process__item--active">
            <i className="block-process__item-icon block-process__item-icon--active fa fa-shopping-cart "></i>
            <label className="block-process__item-label">Chọn sản phẩm</label>
          </li>
          <i className="block-process__item-arrow block-process__item-arrow--active">
            -
          </i>

          <li className="block-process__item block-process__item--active">
            <i className="block-process__item-icon fa fa-user block-process__item-icon--active"></i>
            <label className="block-process__item-label">
              Thông tin đơn hàng
            </label>
          </li>
          <i className="block-process__item-arrow block-process__item-arrow--active">
            -
          </i>

          <li className="block-process__item block-process__item--active">
            <i className="block-process__item-icon fa fa-tag block-process__item-icon--active"></i>
            <label className="block-process__item-label ">Mã khuyến mãi</label>
          </li>
          <i className="block-process__item-arrow block-process__item-arrow--active">
            -
          </i>

          <li className="block-process__item block-process__item--active">
            <i className="block-process__item-icon fa fa-check block-process__item-icon--active"></i>
            <label className="block-process__item-label">
              Xác nhận đơn hàng
            </label>
          </li>
          <i className="block-process__item-arrow block-process__item-arrow--active">
            -
          </i>

          <li className="block-process__item block-process__item--active">
            <i className="block-process__item-icon fa fa-credit-card block-process__item-icon--active"></i>
            <label className="block-process__item-label">Thanh toán</label>
          </li>
        </ul>

        {/* Gửi thông tin đơn hàng qua email */}
        <form className="form-confirm" style={{ display: 'none' }}>
          <input
            name="order_id"
            readOnly
            value={window.localStorage.getItem('orderIDCache')}
          />
          <input
            name="order_fullname"
            readOnly
            value={window.localStorage.getItem('fullnameCache')}
          />
          <input
            name="email_to"
            readOnly
            value={window.localStorage.getItem('emailCache')}
          />
          <input
            name="order_address"
            readOnly
            value={window.localStorage.getItem('addressCache')}
          />
          <input
            name="order_note"
            readOnly
            value={window.localStorage.getItem('noteCache')}
          />
          <input
            name="order_price"
            readOnly
            value={Number(
              window.localStorage.getItem('countTotalPriceCache'),
            ).toLocaleString()}
          />
          <input name="order_time" readOnly value={timeOrder} />
        </form>

        <div className="cart__control-container">
          <div className="cart__control-box" style={{ paddingTop: '10px' }}>
            <button
              className="cart__control-btn cart__control-btn--payment"
              onClick={handleComplePayment}
            >
              Hoàn tất đặt hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
