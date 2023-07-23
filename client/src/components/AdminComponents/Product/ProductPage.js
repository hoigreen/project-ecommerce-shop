import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./product.css"
import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import { handleLoadingPage } from '../../Common';
import EditButtonProduct from "../../EditButton/EditButtonProduct";


const ProductPage = () => {
    const [products, setProducts] = useState([])
    const [countProduct, setCountProduct] = useState(0)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "ShopTECH | Dữ liệu sản phẩm"
        const fetchAPI = () => {
            fetch("https://server-shoptech.onrender.com/api/products").then(res => res.json()).then(data => {
                setProducts(data)
                setCountProduct(data.length)
                setLoading(false)
            })
        }
        fetchAPI()
        handleLoadOptionSelected(2)
    }, [])

    const navigate = useNavigate();

    const handleClickBtnAdd = (e) => {
        handleLoadingPage(1)
        window.setTimeout(() => {
            navigate("/admin/product/add")
        }, 1000)
    }


    return (
        <>
            <AdminSidebar />
            <div id="admin-box">
                <AdminHeader />
                <div className="admin__title">
                    <label className='admin__tilte-label'>Chúc một ngày tốt lành, quản trị viên!</label>
                    <label className='admin__tilte-describe'>Trang quản lý sản phẩm</label>
                </div>

                <div className='product__group'>
                    <div className='product__header'>
                        <label className='product__header-title'>Danh sách sản phẩm</label>
                        <div className='product__header-counting'> Tổng số lượng sản phẩm:
                            <span className='customer__header-counting-number'>{countProduct}</span>
                        </div>
                    </div>

                    <div className='product__list'>
                        {loading ? <p >Đang kết nối đến server ... </p> : products.map((product, index) => (
                            <div className='product__item' key={index}>
                                <label style={{ color: 'white' }} className='admin__item-id'>STT: 0{index + 1}</label>
                                <div className='product__item-avatar'>
                                    <img src={product.imageLink} className='product__item-img'></img>
                                </div>
                                <label
                                    style={{
                                        fontSize: "1.6rem",
                                        fontWeight: "bold",
                                        lineHeight: "2.2rem",
                                        textAlign: "left",
                                        width: "100%"
                                    }} className='admin__item-admin-name'>{product.name}</label>

                                <div className='admin__item-info'>
                                    <label className='admin__item-info-label'>Loại sản phẩm:</label>
                                    <p className='admin__item-info-content'>{product.type}</p>
                                </div>
                                <div className='admin__item-info'>
                                    <label className='admin__item-info-label'>Trạng thái:</label>
                                    <p className='admin__item-info-content'> {product.status || "Trống!"}</p>
                                </div>
                                <div className='admin__item-info--last'>

                                    <div className='admin__item-info-price'>
                                        <p style={{
                                            fontSize: "1.6rem",
                                            fontWeight: "bold",
                                            color: "red",
                                            textAlign: "right",
                                            width: "100%"
                                        }} className='admin__item-info-content'>
                                            {Number(product.price).toLocaleString() || "Trống!"} VNĐ </p>
                                    </div>
                                    <div className='admin__item-eidt'>
                                        <div style={{
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            color: "red",
                                            textAlign: "right",
                                            width: "100%",
                                        }} className='admin__item-info-content'>
                                            <EditButtonProduct product={product} /></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='product__btn-container'>
                        <button className='product__btn-add' onClick={handleClickBtnAdd}>Thêm sản phẩm mới</button>
                    </div>

                </div>
            </div>
        </>

    );
};

export default ProductPage;