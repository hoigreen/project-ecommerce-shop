import React, { useState, useEffect } from 'react';
import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import { handleLoadingPage } from '../../Common';

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchAPIs = () => {
    document.title = 'ShopTECH | Phản hồi khách hàng';
    fetch('https://server-shoptech.onrender.com/api/feedbacks')
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  };

  useEffect(() => {
    fetchAPIs();
    handleLoadOptionSelected(4);
  }, []);

  const handleFillterByType = (type) => {
    var feedbackByType = [];
    fetch('https://server-shoptech.onrender.com/api/feedbacks')
      .then((res) => res.json())
      .then((data) => {
        data.map((feedback) => {
          if (feedback.type === type) {
            feedbackByType.push(feedback);
          }
        });
        setFeedbacks(feedbackByType);
      });

    const fillterList = document.querySelectorAll('.search-control__btn');
    fillterList.forEach((item) => {
      item.onclick = () => {
        fillterList.forEach((btn) =>
          btn.classList.remove('search-control__btn--active'),
        );
        item.classList.add('search-control__btn--active');
      };
    });
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
            Trang quản lý ý kiến khách hàng
          </label>
        </div>

        <div className="promote__group">
          <label className="dash__group-title">
            Danh sách ý kiến của khách hàng
          </label>

          <div className="admin__list" style={{ maxHeight: 'none' }}>
            <div
              style={{ marginLeft: '0', marginBottom: '20px' }}
              className="search-control"
            >
              <button
                className="search-control__btn search-control__btn--active"
                onClick={(e) => {
                  handleLoadingPage(1);
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }}
              >
                Tất cả
              </button>
              <button
                className="search-control__btn"
                onClick={(e) => {
                  handleLoadingPage(1);
                  setTimeout(() => {
                    handleFillterByType('Vấn đề tài khoản');
                  }, 1000);
                }}
              >
                Vấn đề tài khoản
              </button>
              <button
                className="search-control__btn"
                onClick={(e) => {
                  handleLoadingPage(1);
                  setTimeout(() => {
                    handleFillterByType('Vấn đề khuyến mãi');
                  }, 1000);
                }}
              >
                Vấn đề khuyến mãi
              </button>
              <button
                className="search-control__btn"
                onClick={(e) => {
                  handleLoadingPage(1);
                  setTimeout(() => {
                    handleFillterByType('Cải thiện hệ thống');
                  }, 1000);
                }}
              >
                Cải thiện hệ thống
              </button>
              <button
                className="search-control__btn"
                onClick={(e) => {
                  handleLoadingPage(1);
                  setTimeout(() => {
                    handleFillterByType('Vấn đề khác');
                  }, 1000);
                }}
              >
                Vấn đề khác
              </button>
            </div>

            <table className="table">
              <thead>
                <tr className="table__thead-primary">
                  <td>STT</td>
                  <td>Họ tên khách hàng</td>
                  <td>Email</td>
                  <td>Loại góp ý</td>
                  <td>Nội dung</td>
                </tr>
              </thead>
              <tbody className="table__tbody-primary">
                {feedbacks.map((feedback, index) => (
                  <tr className="table__row-loading" key={index}>
                    <td
                      style={{
                        textAlign: 'center',
                        background: '#ffcdd2',
                        fontWeight: 700,
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        color: '#333',
                        fontWeight: 700,
                        textAlign: 'left',
                      }}
                    >
                      {feedback.name}
                    </td>
                    <td>{feedback.email}</td>
                    <td style={{ fontWeight: 700, color: 'red' }}>
                      {feedback.type}
                    </td>
                    <td
                      style={{
                        fontWeight: 400,
                        textAlign: 'justify',
                        fontSize: '1.4rem',
                        fontStyle: 'italic',
                      }}
                    >
                      "{feedback.content || 'None'}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeedbackPage;
