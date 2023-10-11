import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import './dashboard-style.css';
import PieChart from '../../Chart/PieChart';
import BarChart from '../../Chart/BarChart';

const Dashboard = () => {
  const [countAdmin, setCountAdmin] = useState(0);
  const [chartDataProduct, setChartDataProduct] = useState({
    labels: '',
    datasets: [{ label: '', data: 0 }],
  });
  const [chartDataOrder, setChartDataOrder] = useState({
    labels: '',
    datasets: [{ label: '', data: 0 }],
  });
  const [countProduct, setCountProduct] = useState(0);
  const [countUser, setCountUser] = useState(0);
  const [countPromotes, setCountPromotes] = useState(0);

  useEffect(() => {
    document.title = 'ShopTECH | Thống kê';
    const fetchAPIs = () => {
      fetch(`https://server-shoptech.onrender.com/api/products`)
        .then((res) => res.json())
        .then((data) => {
          setCountProduct(data.length);
          processDataProduct(data);
        });
      fetch(`https://server-shoptech.onrender.com/api/admins`)
        .then((res) => res.json())
        .then((data) => {
          setCountAdmin(data.length);
        });
      fetch(`https://server-shoptech.onrender.com/api/users`)
        .then((res) => res.json())
        .then((data) => {
          setCountUser(data.length);
        });
      fetch(`https://server-shoptech.onrender.com/api/promotes`)
        .then((res) => res.json())
        .then((data) => {
          setCountPromotes(data.length);
        });
      fetch(`https://server-shoptech.onrender.com/api/orders`)
        .then((res) => res.json())
        .then((data) => {
          processDataOrder(data);
        });
    };
    fetchAPIs();
    handleLoadOptionSelected(0);
  }, []);

  const processDataProduct = (data) => {
    const groupedData = _.groupBy(data, 'type');

    setChartDataProduct({
      labels: Object.keys(groupedData),
      datasets: [
        {
          label: 'Số lượng',
          data: Object.values(groupedData).map((group) => group.length), // Lấy số lượng phần tử trong mỗi nhóm
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1,
          display: true,
          align: 'center',
          font: {
            size: '18px',
          },
        },
      ],
    });
  };

  const processDataOrder = (data) => {
    data.map((item) => {
      item.time = item.time[5];
    });

    const groupedData = _.groupBy(data, 'time');
    setChartDataOrder({
      labels: Object.keys(groupedData).map(
        (group) => (group = 'Tháng ' + group),
      ),
      datasets: [
        {
          label: 'Doanh thu sản phẩm',
          data: Object.values(groupedData).map((group) => {
            var total = 0;
            group.map((item) => {
              total += item.lists.reduce(
                (sum, cur) => sum + Number(cur.price),
                1,
              );
            });
            return total;
          }),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1,
          display: true,
          align: 'center',
          font: {
            size: '18px',
          },
        },
      ],
    });
  };

  return (
    <div className="admin__container">
      <AdminSidebar />
      <div id="admin-box">
        <AdminHeader />

        <div className="admin__title">
          <label className="admin__tilte-label">
            Chúc một ngày tốt lành, quản trị viên!
          </label>
          <label className="admin__tilte-describe">Trang thống kê</label>
        </div>

        <div className="dash__counting">
          <div className="dash__counting-item">
            <div className="dash__counting-content">
              <div className="dash__counting-number" style={{ color: 'red' }}>
                {countUser}
              </div>
              <div className="dash__counting-describe">Số lượng khách hàng</div>
            </div>
            <i className="dash__counting-icon fa fa-users"></i>
          </div>

          <div className="dash__counting-item">
            <div className="dash__counting-content">
              <div className="dash__counting-number" style={{ color: 'green' }}>
                {countProduct}
              </div>
              <div className="dash__counting-describe">Số lượng sản phẩm</div>
            </div>
            <i className="dash__counting-icon fa fa-list"></i>
          </div>

          <div className="dash__counting-item">
            <div className="dash__counting-content">
              <div className="dash__counting-number" style={{ color: 'blue' }}>
                {countPromotes}
              </div>
              <div className="dash__counting-describe">Số lượng khuyến mãi</div>
            </div>
            <i className="dash__counting-icon fa fa-tag"></i>
          </div>

          <div className="dash__counting-item dash__counting-item--none-border">
            <div className="dash__counting-content">
              <div
                className="dash__counting-number"
                style={{ color: 'violet' }}
              >
                {countAdmin}
              </div>
              <div className="dash__counting-describe">Quản trị viên</div>
            </div>
            <i className="dash__counting-icon fa fa-user"></i>
          </div>
        </div>

        <div className="admin__group">
          <label className="dash__group-title">Thống kê ShopTECH</label>
          <div className="dash__chart-list">
            <div className="dash__chart-item dash__chart-item--pie">
              <PieChart chartData={chartDataProduct} />
            </div>

            <div className="dash__chart-item dash__chart-item--bar">
              <BarChart chartData={chartDataOrder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
