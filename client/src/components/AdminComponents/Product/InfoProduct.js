import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./product.css"
import AdminHeader from '../Common/AdminHeader';
import AdminSidebar, { handleLoadOptionSelected } from '../Common/AdminSidebar';
import { changeFilename, handleLoadingPage } from '../../Common';
import axios from 'axios';

const InfoProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [enType, setEnType] = useState('')
    const [colorProductEdit, setColorProductEdit] = useState([])
    const [boolHotDeal, setBoolHotDeal] = useState(false)
    const [boolFeatured, setBoolFeatured] = useState(false)
    const [imageLinkFile, setImageLinkFile] = useState(null)
    const [imagePrimaryFile, setImagePrimaryFile] = useState(null)
    const [countImageInList, setCountImageInList] = useState(0)
    const [imageFileInList, setImageFileInList] = useState(null)
    // const [arrayImageList, setArrayImageList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPIs = () => {
            fetch("https://server-shoptech.onrender.com/api/products/" + id).then(res => res.json()).then(data => {
                setProduct(data)
                setCountImageInList(data.imageList.length)
                // setArrayImageList(data.imageList)
                setLoading(false)
            })
        }
        fetchAPIs()
        handleLoadOptionSelected(2)
    }, [])


    // Thay đổi ảnh chính
    const changeImageLink = () => {
        const preview = document.querySelector(".info-admin-product__image-primary-img")
        const imageProductLink = document.querySelector("#image-primary").files[0]

        const reader = new FileReader()
        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false)

        if (imageProductLink) {
            reader.readAsDataURL(imageProductLink)
            setImageLinkFile(imageProductLink)
        }
    }

    const handleUploadImage = () => {
        if (imageLinkFile) {
            const formData = new FormData();
            formData.append('image-primary', imageLinkFile, changeFilename(imageLinkFile.name, "imageLink-" + product._id));

            axios.post('https://server-shoptech.onrender.com/api/products/upload-image', formData)
                .then(response => {
                    console.log(response)
                })
                .catch((error) => {
                    alert('Lỗi khi upload:', error);
                });
        }
    }

    const handleConfirmChangeImageLink = async (e) => {
        e.preventDefault()
        handleUploadImage()
        var imageLinkProduct = ''
        if (imageLinkFile) {
            imageLinkProduct = `/public/uploads/products/${changeFilename(imageLinkFile.name, "imageLink-" + product._id)}`;
        }

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


    // Thay đổi ảnh banner
    const changeImageBanner = () => {
        const preview = document.querySelector(".info-admin-product__image-banner-img")
        const imageProductLink = document.querySelector("#image-banner").files[0]

        const reader = new FileReader()
        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false)

        if (imageProductLink) {
            reader.readAsDataURL(imageProductLink)
            setImagePrimaryFile(imageProductLink)
        }
    }

    const handleUploadImagePrimary = () => {
        if (imagePrimaryFile) {
            const formData = new FormData();
            formData.append('image-banner', imagePrimaryFile, changeFilename(imagePrimaryFile.name, "imagePrimary-" + product._id));

            axios.post('https://server-shoptech.onrender.com/api/products/upload-image-primary', formData)
                .then(response => {
                    console.log(response)
                })
                .catch((error) => {
                    alert('Lỗi khi upload:', error);
                });
        }
    }

    const handleConfirmChangeImageBanner = async (e) => {
        e.preventDefault()
        handleUploadImagePrimary()
        var imagePrimaryProduct = ''
        if (imagePrimaryFile) {
            imagePrimaryProduct = `/public/uploads/products/${changeFilename(imagePrimaryFile.name, "imagePrimary-" + product._id)}`;
        }
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


    // Thay đổi ảnh trong list ảnh
    const changeImageInList = () => {
        const preview = document.querySelector(".img-new")
        const elementWapper = document.querySelector(".info-admin-product__image-item--disable")
        console.log(preview)
        const imageProductFile = document.querySelector("#image-list").files[0]

        const reader = new FileReader()
        reader.addEventListener("load", () => {
            elementWapper.style.display = "block"
            preview.src = reader.result;
        }, false)

        if (imageProductFile) {
            reader.readAsDataURL(imageProductFile)
            setImageFileInList(imageProductFile)
        }
    }

    const handleUploadImageInList = () => {
        if (imageFileInList) {
            const formData = new FormData();
            formData.append('image-list', imageFileInList, changeFilename(imageFileInList.name, "imageList-" + product._id + "-" + countImageInList));

            axios.post('https://server-shoptech.onrender.com/api/products/upload-image-list', formData)
                .then(response => {
                    console.log(response)
                })
                .catch((error) => {
                    alert('Lỗi khi upload:', error);
                });
        }
    }

    var arrayImageList = []
    const handleConfirmEditList = async () => {
        handleUploadImageInList()
        if (imageFileInList) {
            arrayImageList = [...product.imageList, `/public/uploads/products/${changeFilename(imageFileInList.name, "imageList-" + product._id + "-" + countImageInList)}`]
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
                                <img className="info-admin-product__image-primary-img" src={process.env.REACT_APP_API + product.imageLink || "https://server-shoptech.onrender.com/public/img-product-empty.png"}></img>
                                <input type='file' id="image-primary" value="" onChange={changeImageLink} hidden></input>
                                <div className="info-admin-product__image-controll">
                                    <label htmlFor="image-primary" className="info-admin-product__image-btn">Chỉnh sửa</label>
                                    <button className="info-admin-product__image-btn" style={{ backgroundColor: "#df8129", color: "#fff" }}
                                        onClick={handleConfirmChangeImageLink}>Xác nhận</button>
                                </div>
                            </div>

                            <div className="info-admin-product__image-box">
                                <div className="info-admin-product__image-banner">
                                    <img className="info-admin-product__image-banner-img" src={process.env.REACT_APP_API + product.imagePrimary || "https://server-shoptech.onrender.com/public/img-product-empty.png"}></img>
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
                                    <label for="image-list" class="info-admin-product__image-btn"
                                        style={{
                                            margin: "0px 6px 0 0",
                                            width: "cacl(25% - 10px)",
                                            height: "56px",
                                            minWidth: "56px",
                                            padding: "0",
                                            lineHeight: "56px",
                                            fontSize: "4rem",
                                        }}>+</label>
                                    <input type="file" name="image-list" class="image-list" id="image-list" hidden onChange={changeImageInList} />
                                    <div className="info-admin-product__image-item info-admin-product__image-item--disable" style={{ display: "none" }}>
                                        <img className="info-admin-product__image-item-img--existed img-new" src="https://server-shoptech.onrender.com/public/img-product-empty.png" />
                                    </div>

                                    {loading ? <p>Đang kết nối đến server...</p> : product.imageList.map((item, index) => (
                                        <div className="info-admin-product__image-item" key={index}>
                                            <img className="info-admin-product__image-item-img--existed" src={process.env.REACT_APP_API + product.imageList[index]} />
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
                                <input className='info-admin-product__input' defaultValue={product.brand} />

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