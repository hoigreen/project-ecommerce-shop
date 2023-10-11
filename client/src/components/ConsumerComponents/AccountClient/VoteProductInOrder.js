import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Nav } from '../Common';
import { handleLoadingPage } from '../../Common';
import axios from 'axios';

const VoteProductInOrder = ({ socket }) => {
  const { orderID, productName } = useParams();
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});
  const [listProduct, setListProduct] = useState([]);

  const [imageLink, setImageLink] = useState('');
  const [option, setOption] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState();

  const [numberStar, setNumberStar] = useState(0);
  const [contentComment, setContentComment] = useState('');

  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState();
  const [starCurrent, setStarCurrent] = useState(0);
  const [voter, setVoter] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'ShopTECH | Đánh giá sản phẩm';
    const fetchAPIs = () => {
      fetch(
        `https://server-shoptech.onrender.com/api/users/${
          JSON.parse(window.localStorage.getItem('auth')).user._id
        }`,
      )
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });

      fetch('https://server-shoptech.onrender.com/api/orders/' + orderID)
        .then((res) => res.json())
        .then((data) => {
          setOrder(data);
          setListProduct(data.lists);
        });

      fetch('https://server-shoptech.onrender.com/api/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    };
    fetchAPIs();
    handleClickStar();
  }, []);

  useEffect(() => {
    listProduct.map((item, index) => {
      if (item.productName === productName) {
        setImageLink(item.imageLink);
        setOption(item.option);
        setColor(item.color);
        setPrice(item.price);
      }
    });
  }, [listProduct]);

  useEffect(() => {
    products.map((p, index) => {
      if (p.name === productName) {
        setProductId(p._id);
        setVoter(p.voter);
        setStarCurrent(p.star);
      }
    });
  }, [products]);

  const handleClickStar = () => {
    const stars = document.querySelectorAll('.vote-product__start-group-item');
    for (let i = 0; i < stars.length; i++) {
      stars[i].onclick = () => {
        for (let j = 0; j < stars.length; j++) {
          stars[j].classList.remove('vote-product__start-group-item--selected');
        }
        stars[i].classList.add('vote-product__start-group-item--selected');
        switch (i) {
          case 0:
            setNumberStar(5);
            break;
          case 1:
            setNumberStar(4);
            break;
          case 2:
            setNumberStar(3);
            break;
          case 3:
            setNumberStar(2);
            break;
          case 4:
            setNumberStar(1);
            break;
        }
      };
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
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
    if (!numberStar) {
      alert('Vui lòng bình chọn số sao sản phẩm này');
      return;
    }

    try {
      axios
        .put(
          `https://server-shoptech.onrender.com/api/products/update-vote/${productId}`,
          { star: (Number(starCurrent) * voter + numberStar) / (voter + 1) },
        )
        .then(() => {
          axios
            .put(
              `${process.env.REACT_APP_API}/api/orders/update-status-vote/${orderID}`,
              { productName: productName },
            )
            .then(() => {
              axios
                .post(`${process.env.REACT_APP_API}/api/comments/create`, {
                  nameProductVoted: productName,
                  owner: user.username,
                  ownerAvatar: user.avatarUrl,
                  ownerName: user.fullname,
                  time: dateTime,
                  content: contentComment,
                  starVoted: numberStar,
                })
                .then(() => {
                  handleLoadingPage(1);
                  setTimeout(() => {
                    window.location.href = `/account/history/${orderID}`;
                  }, 1000);
                });
            });
        });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Nav />
      <div className="vote-product__cover">
        <div className="vote-product">
          <div className="vote-product__header">ĐÁNH GIÁ SẢN PHẨM</div>
          <div className="vote-product__body">
            <div className="vote-product__item">
              <img src={imageLink} className="vote-product__item-img" />
              <div className="vote-product__item-info">
                <label className="vote-product__item-name">{productName}</label>
                <label className="vote-product__item-content">{option}</label>
                <label className="vote-product__item-content">{color}</label>
                <p className="vote-product__item-price">
                  {Number(price).toLocaleString()} đ
                </p>
              </div>
            </div>

            <label className="vote-product__title">
              Bạn thấy thế nào về sản phẩm này?
            </label>
            <p className="vote-product__describe">
              Hãy đánh giá và để lại nhận xét dành cho ShopTECH nhé
            </p>

            <ul className="vote-product__start-group">
              <li className="vote-product__start-group-item" key="1"></li>
              <li className="vote-product__start-group-item" key={2}></li>
              <li className="vote-product__start-group-item"></li>
              <li className="vote-product__start-group-item"></li>
              <li className="vote-product__start-group-item"></li>
            </ul>

            <textarea
              type="text"
              className="vote-product__textbox"
              onChange={(e) => {
                setContentComment(e.target.value);
              }}
              placeholder="Chia sẽ cảm nhận của bạn ở đây nhé ..."
              value={contentComment}
            />
          </div>

          <div className="vote-product__footer">
            <button
              className="vote-product__btn-confirm"
              onClick={handleConfirm}
            >
              Xác nhận
              <i className="vote-product__btn-icon fa fa-check"></i>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/account/history/${orderID}`);
              }}
              className="vote-product__btn-close"
            >
              Close
              <i className="vote-product__btn-icon fa fa-sign-out"></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VoteProductInOrder;
