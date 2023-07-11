import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./product.css"
import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import { handleLoadingPage } from '../../Common';
import axios from 'axios';

const InfoProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [enType, setEnType] = useState('')
    const [colorProductEdit, setColorProductEdit] = useState([])
    const [boolHotDeal, setBoolHotDeal] = useState(false)
    const [boolFeatured, setBoolFeatured] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPIs = () => {
            fetch("http://localhost:4000/api/products/" + id).then(res => res.json()).then(data => {
                setProduct(data)
                setLoading(false)
            })
        }
        fetchAPIs()
        handleLoadOptionSelected(2)
    }, [])

    const changeImageBanner = () => {
        const preview = document.querySelector(".info-admin-product__image-banner-img")
        const imageAdmin = document.querySelector("#image-banner").files[0]
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false)

        if (imageAdmin) {
            reader.readAsDataURL(imageAdmin)
        }
    }

    const changeImagePrimary = () => {
        const preview = document.querySelector(".info-admin-product__image-primary-img")
        const imageAdmin = document.querySelector("#image-primary").files[0]
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false)

        if (imageAdmin) {
            reader.readAsDataURL(imageAdmin)
        }
    }

    var indexImageItem = 0;
    const handleAddImageInList = () => {
        const imagesList = document.querySelector(".info-admin-product__image-list")
        if (imagesList) {
            const item = document.createElement("div");
            item.classList.add("info-admin-product__image-item")
            item.innerHTML = `
                    <img src="http://localhost:4000/public/img-product-empty.png" class="info-admin-product__image-item-img" src="">
                    <label for="image-list-${indexImageItem}" class="info-admin-product__image-item-btn--remove"></label>
                    <input type="file" class="image-list" id="image-list-${indexImageItem}" hidden/>
            `
            imagesList.appendChild(item);
            handleAddImage(Number(indexImageItem))
            indexImageItem = indexImageItem + 1;
        }
    }

    const handleAddImage = (index) => {
        const imageItems = document.querySelectorAll(".image-list");
        const preview = document.querySelectorAll(".info-admin-product__image-item-img")
        imageItems[index].onchange = () => {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                preview[index].src = reader.result;
            }, false)
            reader.readAsDataURL(imageItems[index].files[0])
        }
    }

    const handleConfirmChangeImageLink = async (e) => {
        e.preventDefault()
        const imageLinkProduct = document.querySelector(".info-admin-product__image-primary-img").getAttribute("src")
        if (window.confirm("Bạn muốn cập nhật thông tin sản phẩm?") == true) {
            try {
                const res = await axios.put(`${process.env.REACT_APP_API}/api/products/update/image-link=${id}`, {
                    imageLink: imageLinkProduct
                });
                if (res && res.data.success) {
                    window.alert("Thành công!")
                    handleLoadingPage(1)
                    window.setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                } else {
                    alert("Cập nhật thông tin thất bại")
                }
            } catch (error) {
                alert(error)
            }
        }
    }

    const handleConfirmChangeImageBanner = async (e) => {
        e.preventDefault()
        const imagePrimaryProduct = document.querySelector(".info-admin-product__image-banner-img").getAttribute("src")
        if (window.confirm("Bạn muốn cập nhật thông tin sản phẩm?") == true) {
            try {
                const res = await axios.put(`${process.env.REACT_APP_API}/api/products/update/image-banner=${id}`, {
                    imagePrimary: imagePrimaryProduct
                });
                if (res && res.data.success) {
                    window.alert("Thành công!")
                    handleLoadingPage(1)
                    window.setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                } else {
                    alert("Cập nhật thông tin thất bại")
                }
            } catch (error) {
                alert(error)
            }
        }
    }

    var arrayImageList = product.imageList;
    const handleConfirmEditList = async () => {
        const imagesItems = document.querySelectorAll(".info-admin-product__image-item-img")
        if (imagesItems) {
            for (var i = 0; i < imagesItems.length; i++) {
                arrayImageList.push(imagesItems[i].src)
            }
        }
        try {
            const res = await axios.put(`${process.env.REACT_APP_API}/api/products/update/image-list=${id}`, {
                imageList: arrayImageList
            });
            if (res && res.data.success) {
                window.alert("Thành công!")
                handleLoadingPage(1)
                window.setTimeout(() => {
                    window.location.reload()
                }, 1000)
            } else {
                alert("Cập nhật thông tin thất bại")
            }
        } catch (error) {
            alert(error)
        }
    }

    const handleConfirmChangeInfo = async (e) => {
        e.preventDefault()
        var boolFeaturedEdit;
        var boolHotDealEdit;
        if (boolFeatured === "true") {
            boolFeaturedEdit = boolFeatured === "true"
        }
        else {
            boolFeaturedEdit = String(boolFeatured).toLowerCase() === "False"
        }
        if (boolHotDeal === "true") {
            boolHotDealEdit = boolHotDeal === true
        }
        else {
            boolHotDealEdit = String(boolHotDeal).toLowerCase() === "False"
        }

        const inputElements = document.querySelectorAll(".info-admin-product__input");
        if (window.confirm("Bạn muốn cập nhật thông tin sản phẩm?") == true) {
            try {
                const res = await axios.put(`${process.env.REACT_APP_API}/api/products/update=${id}`, {
                    name: inputElements[0].value,
                    type: inputElements[1].value,
                    enType,
                    brand: inputElements[2].value,
                    price: inputElements[4].value,
                    color: colorProductEdit,
                    hotDeal: boolHotDealEdit,
                    featured: boolFeaturedEdit,
                    status: inputElements[7].value
                });
                if (res && res.data.success) {
                    window.alert("Thành công!")
                    handleLoadingPage(1)
                    window.setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                } else {
                    alert("Cập nhật thông tin thất bại")
                }
            } catch (error) {
                alert(error)
            }
        }
    }

    const handleDeleteProduct = async (e) => {
        e.preventDefault()
        if (window.confirm("Bạn có chắc muốn xóa toàn bộ thông tin của sản phẩm này?") == true) {
            try {
                const res = await axios.delete(`${process.env.REACT_APP_API}/api/products/delete/${id}`);
                if (res && res.data.success) {
                    window.alert("Xóa Thành công!")
                    handleLoadingPage(1)
                    window.setTimeout(() => {
                        window.location.href = '/admin/product'
                    }, 1000)
                } else {
                    alert("Xóa thất bại")
                }
            } catch (error) {
                alert(error)
            }
        }
    }

    return (
        <div className='customer__container'>
            <AdminSidebar />
            <div id="admin-box">
                <AdminHeader />
                <div className="admin__title">
                    <label className='admin__tilte-label'>Chúc một ngày tốt lành, quản trị viên!</label>
                    <label className='admin__tilte-describe'>Trang quản lý khách hàng</label>
                </div>

                <div className='info-admin-product__group'>
                    <div className="info-admin-product__header">CHỈNH SỬA THÔNG TIN SẢN PHẨM</div>

                    <div className="info-admin-product__body">
                        <div className="info-admin-product__col-1">
                            <div className="info-admin-product__image-primary">
                                <img className="info-admin-product__image-primary-img" src={product.imageLink || "http://localhost:4000/public/img-product-empty.png"}></img>
                                <input type='file' id="image-primary" value="" onChange={changeImagePrimary} hidden></input>
                                <div className="info-admin-product__image-controll">
                                    <label htmlFor="image-primary" className="info-admin-product__image-btn">Chỉnh sửa</label>
                                    <button className="info-admin-product__image-btn" style={{ backgroundColor: "#df8129", color: "#fff" }}
                                        onClick={handleConfirmChangeImageLink}>Xác nhận</button>
                                </div>
                            </div>

                            <div className="info-admin-product__image-box">
                                <div className="info-admin-product__image-banner">
                                    <img className="info-admin-product__image-banner-img" src={product.imagePrimary || "http://localhost:4000/public/img-product-empty.png"}></img>
                                    <input type='file' id="image-banner" value="" onChange={changeImageBanner} hidden></input>
                                    <div className="info-admin-product__image-controll">
                                        <label htmlFor="image-banner" className="info-admin-product__image-btn">Chỉnh sửa</label>
                                        <button className="info-admin-product__image-btn" style={{ backgroundColor: "#df8129", color: "#fff" }}
                                            onClick={handleConfirmChangeImageBanner}>
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>

                                <ul className="info-admin-product__image-list">
                                    <button className="info-admin-product__item-image-btn" onClick={handleAddImageInList}>+</button>
                                    {loading ? <p>Đang kết nối đến server...</p> : product.imageList.map((item, index) => (
                                        <div className="info-admin-product__image-item" key={index}>
                                            <img className="info-admin-product__image-item-img--existed" src={product.imageList[index]} />
                                        </div>
                                    ))}
                                </ul>
                                <button className="info-admin-product__image-btn" style={{ backgroundColor: "#df8129", color: "#fff", fontSize: "1.4rem", minWidth: "90px" }}
                                    onClick={handleConfirmEditList}>
                                    Xác nhận
                                </button>
                            </div>
                        </div>

                        <div className='info-admin-product__col-2'>
                            <div className="info-admin-product__box-info">
                                <label className="info-admin-product__label">Tên sản phẩm</label>
                                <input style={{ fontWeight: 'bold' }} className='info-admin-product__input' defaultValue={product.name} />

                                <label className="info-admin-product__label">Loại sản phẩm</label>
                                <select style={{ fontWeight: '500' }} className='info-admin-product__input' defaultValue={product.type} onChange={(e) => {
                                    switch ((e.target.value).toLowerCase()) {
                                        case "điện thoại":
                                            setEnType("smartphone");
                                            break;
                                        case "máy tính bảng":
                                            setEnType("tablet");
                                            break;
                                        case "máy tính xách tay":
                                            setEnType("laptop");
                                            break;
                                        case "phụ kiện":
                                            setEnType("accessories");
                                            break;
                                    }
                                }}>
                                    <option value="">Chọn loại sản phẩm...</option>
                                    <option value="Điện thoại">Điện thoại di động</option>
                                    <option value="Máy tính xách tay">Máy tính xách tay</option>
                                    <option value="Máy tính bảng">Máy tính bảng</option>
                                    <option value="Phụ kiện">Phụ kiện công nghệ</option>
                                </select>

                                <label className="info-admin-product__label">Thương hiệu</label>
                                <input className='info-admin-product__input' value={product.brand} />

                                <label className="info-admin-product__label">Màu sắc</label>
                                <input type='text' className='info-admin-product__input' onChange={(e) => {
                                    var arrayColor = (e.target.value).split(", ")
                                    setColorProductEdit(arrayColor)
                                }} placeholder="(Mỗi màu sắc được ngăn cách bằng dấu phẩy). Vd: Đỏ, Vàng, ..." defaultValue={product.color} />


                                <label className="info-admin-product__label">Giá sản phẩm</label>
                                <input type="number" className='info-admin-product__input' defaultValue={product.price}
                                    style={{ fontWeight: 'bold', color: 'red' }} />

                                <label className="info-admin-product__label">Thêm vào sản phẩm nổi bật</label>
                                <select className='info-admin-product__input' onChange={(e) => { setBoolFeatured(e.target.value); }}>
                                    <option value="" selected >Chọn giá trị...</option>
                                    <option value="true">Có</option>
                                    <option value="False">Không</option>
                                </select>

                                <label className="info-admin-product__label">Thêm vào sản phẩm khuyến mãi khung giờ vàng</label>
                                <select className='info-admin-product__input' style={{ fontWeight: 'bold', color: 'green' }} onChange={(e) => { setBoolHotDeal(e.target.value); }}>
                                    <option value="" selected >Chọn giá trị...</option>
                                    <option value="true">Có</option>
                                    <option value="False">Không</option>
                                </select>

                                <label className="info-admin-product__label">Trạng thái sản phẩm</label>
                                <select className='info-admin-product__input'>
                                    <option value="" selected >Chọn giá trị...</option>
                                    <option value="Sẵn hàng">Sẵn hàng</option>
                                    <option value="Cháy hàng">Cháy hàng</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="info-admin-product__footer">
                        <button className="info-admin-product__btn" style={{ backgroundColor: "red" }} onClick={handleDeleteProduct}>Xóa sản phẩm<i className="ti-check"></i></button>
                        <button className="info-admin-product__btn" onClick={handleConfirmChangeInfo}>Xác nhận<i className="ti-check"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoProduct