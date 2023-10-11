import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './styles/promote-style.css';
import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import { changeFilename, handleLoadingPage } from '../../Common';
import axios from 'axios';

const InfoPromote = () => {
  const [promote, setPromote] = useState({});
  const { id } = useParams();
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'ShopTECH | Thông tin khuyến mãi';
    const fetchAPI = () => {
      fetch('https://server-shoptech.onrender.com/api/promotes/' + id)
        .then((res) => res.json())
        .then((data) => {
          setPromote(data);
        });
    };
    fetchAPI();
    handleLoadOptionSelected(3);
  }, []);

  const changeImage = () => {
    const preview = document.querySelector('.info-promote__avatar-img');
    const image = document.querySelector('#image-change').files[0];
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        preview.src = reader.result;
      },
      false,
    );

    if (image) {
      reader.readAsDataURL(image);
      setImageFile(image);
    }
  };

  const handleConfirmChange = async (e) => {
    e.preventDefault();
    const inputName = document.querySelector('.info-promote__input-name');
    const inputElements = document.querySelectorAll('.info-promote__input');
    if (
      window.confirm(
        'Bạn muốn cập nhật thông tin chương trình khuyến mãi này?',
      ) == true
    ) {
      try {
        if (imageFile) {
          const formData = new FormData();
          formData.append(
            'image-change',
            imageFile,
            changeFilename(imageFile.name, promote._id),
          );

          axios
            .post(
              'https://server-shoptech.onrender.com/api/promotes/upload-image',
              formData,
            )
            .then((response) => {
              axios
                .put(`${process.env.REACT_APP_API}/api/promotes/update=${id}`, {
                  imageLink: response.data.path,
                  name: inputName.value,
                  timeStart: inputElements[0].value,
                  timeEnd: inputElements[1].value,
                  percent: Number(inputElements[2].value),
                  apply: inputElements[3].value,
                })
                .then((res) => {
                  if (res && res.data.success) {
                    window.alert('Cập nhật thông tin thành công!');
                    handleLoadingPage(1);
                    window.setTimeout(() => {
                      navigate(`/admin/promote`);
                    }, 1000);
                  } else {
                    alert('Cập nhật thông tin thất bại');
                  }
                });
            })
            .catch((error) => {
              alert('Lỗi khi upload:', error);
            });
        } else {
          axios
            .put(`${process.env.REACT_APP_API}/api/promotes/update=${id}`, {
              imageLink: promote.imageLink,
              name: inputName.value,
              timeStart: inputElements[0].value,
              timeEnd: inputElements[1].value,
              percent: Number(inputElements[2].value),
              apply: inputElements[3].value,
            })
            .then((res) => {
              if (res && res.data.success) {
                window.alert('Cập nhật thông tin thành công!');
                handleLoadingPage(1);
                window.setTimeout(() => {
                  navigate(`/admin/promote`);
                }, 1000);
              } else {
                alert('Cập nhật thông tin thất bại');
              }
            });
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (
      window.confirm(
        'Bạn có chắc muốn xóa toàn bộ thông tin của sản phẩm này?',
      ) == true
    ) {
      try {
        const res = await axios.delete(
          `${process.env.REACT_APP_API}/api/promotes/delete/${id}`,
        );
        if (res && res.data.success) {
          window.alert('Xóa Thành công!');
          handleLoadingPage(1);
          window.setTimeout(() => {
            window.location.href = '/admin/promote';
          }, 1000);
        } else {
          alert('Xóa thất bại');
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <React.Fragment>
      <AdminSidebar />
      <div id="admin-box">
        <AdminHeader />
        <div className="admin__title">
          <label className="admin__tilte-label">
            Chúc một ngày tốt lành, quản trị viên!
          </label>
          <label className="admin__tilte-describe">
            Trang quản lý khách hàng
          </label>
        </div>

        <div className="info-page__group">
          <div className="info-promote__header">
            Chỉnh sửa thông tin chương trình khuyến mãi
          </div>

          <div className="info-promote__body">
            <div className="add__avatar">
              <img
                src={
                  promote.imageLink ||
                  `${process.env.REACT_APP_API}/public/img-product-empty.png`
                }
                className="info-promote__avatar-img"
              ></img>
              <input
                type="file"
                id="image-change"
                onChange={changeImage}
                hidden
              ></input>
              <label
                htmlFor="image-change"
                className="info-admin-product__image-btn"
              >
                Thay đổi hình ảnh khuyến mãi
              </label>
            </div>

            <label
              style={{ textAlign: 'center', fontWeight: '600' }}
              className="info-page__label"
            >
              Tên chương trình khuyến mãi
            </label>
            <input
              style={{ fontWeight: 'bold', color: 'green' }}
              className="info-promote__input-name"
              defaultValue={promote.name}
            />

            <div className="info-promote__box-info">
              <div className="info-promote__col-1">
                <label className="info-promote__label">Thời gian bắt đầu</label>
                <input
                  type="date"
                  className="info-promote__input"
                  defaultValue={promote.timeStart}
                />

                <label className="info-promote__label">Đến ngày</label>
                <input
                  type="date"
                  className="info-promote__input"
                  defaultValue={promote.timeEnd}
                />
              </div>

              <div className="info-promote__col-2">
                <label
                  style={{ fontWeight: 'bold', color: 'red' }}
                  className="info-promote__label"
                >
                  Phần trăm (%) giảm
                </label>
                <input
                  type="number"
                  className="info-promote__input"
                  defaultValue={promote.percent}
                />

                <label className="info-promote__label">
                  Khuyến mãi áp dụng cho
                </label>
                <input
                  className="info-promote__input"
                  defaultValue={promote.apply}
                />
              </div>
            </div>
          </div>

          <div className="info-page__footer">
            <button
              className="info-page__btn"
              style={{ backgroundColor: 'red' }}
              onClick={handleDelete}
            >
              Xóa khuyến mãi<i className="ti-close"></i>
            </button>
            <button className="info-page__btn" onClick={handleConfirmChange}>
              Xác nhận<i className="ti-check"></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoPromote;
