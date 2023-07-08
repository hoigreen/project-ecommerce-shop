import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./product.css"

import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import { handleLoadingPage } from '../../Common';
import EditButtonProduct from "../../EditButton/EditButtonProduct";


const ProductPage = ({ socket }) => {
    const [products, setProducts] = useState([])
    const [countProduct, setCountProduct] = useState(0)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPI = () => {
            fetch("http://localhost:4000/api/products").then(res => res.json()).then(data => {
                setProducts(data.products)
                setCountProduct(data.products.length)
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

                    <div className='admin__list'>
                        {loading ? <p>Đang kết nối đến server ... </p> : products.map((product, index) => (
                            <div className='admin__item' key={index}>
                                <label className='admin__item-id'>{product.id}</label>
                                <div className='product__item-avatar'>
                                    <img src={product.imageLink} className='product__item-img'></img>
                                </div>
                                <label
                                    style={{
                                        fontSize: "1.8rem",
                                        fontWeight: "bold",
                                        lineHeight: "2rem",
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
                                            fontSize: "1.8rem",
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