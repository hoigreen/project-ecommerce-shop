import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/promote-style.css';
import { handleLoadingPage } from '../../Common';
import axios from 'axios';

const AddPromote = () => {
  const [name, setName] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [percent, setPercent] = useState(0);
  const [apply, setApply] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'ShopTECH | Thêm chương trình khuyến mãi';
  }, []);

  const handleAddPromote = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/promotes/create`,
        {
          imageLink: '',
          name,
          timeStart,
          timeEnd,
          percent,
          apply,
        },
      );
      if (res && res.data.success) {
        alert('Thêm chương trình khuyến mãi thành công');
        handleLoadingPage(1);
        window.setTimeout(() => {
          navigate('/admin/promote');
        }, 1000);
      } else {
        window.alert('Đã gặp lỗi khi tạo! Vui lòng thử lại');
      }
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  return (
    <div className="add-product__container">
      <div className="add__cover">
        <div className="add add__promote-container">
          <div className="add__header">THÊM CHƯƠNG TRÌNH KHUYẾN MÃI MỚI</div>
          <div className="add-promote__body">
            <label className="add__title">Thông tin khuyến mãi</label>

            <label className="add__label">Tên chương trình khuyến mãi </label>
            <input
              style={{ fontWeight: 'bold', color: 'green' }}
              className="add__input"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label className="add__label">Thời gian bắt đầu</label>
            <input
              type="date"
              className="add__input"
              onChange={(e) => {
                setTimeStart(e.target.value);
              }}
            />

            <label className="add__label">Thời gian kết thúc</label>
            <input
              type="date"
              className="add__input"
              onChange={(e) => {
                setTimeEnd(e.target.value);
              }}
            />

            <label
              style={{ fontWeight: 'bold', color: 'red' }}
              className="add__label"
            >
              Phần trăm (%) giảm{' '}
            </label>
            <input
              type="number"
              className="add__input"
              onChange={(e) => {
                setPercent(e.target.value);
              }}
            />

            <label className="add__label">Áp dụng cho sản phẩm</label>
            <input
              type="text"
              className="add__input"
              onChange={(e) => {
                setApply(e.target.value);
              }}
            />
          </div>

          <div className="add__footer">
            <button className="add__btn-confirm" onClick={handleAddPromote}>
              Xác nhận
              <i className="add__btn-icon fa fa-check"></i>
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                navigate('/admin/promote');
              }}
              className="add__btn-close"
            >
              Close
              <i className="add__btn-icon fa fa-sign-out"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPromote;
