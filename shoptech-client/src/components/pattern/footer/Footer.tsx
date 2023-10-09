import { Container } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="w-full min-h-200 bg-white mt-30 mb-10">
        <Container maxWidth='xl'>
          <div className="flex flex-wrap w-full md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
            <div className='w-1/2 md:mr-2 md:w-1/4 lg:w-1/4 xl:w-1/4'>
              <div className='block w-full text-sm pb-6 pl-4'>
                <label className='text-xs font-bold block my-1 md:text-md md:mb-4 md:mt-8 md:my-2'>Tìm chi nhánh cửa hàng ShopTECH</label>
                <iframe
                  className='mt-4 w-full rounded-md border-gray-100'
                  src="https://www.google.com/maps/embed?p=!1m18!1m12!1m3!1d3918.2946148745355!2d106.6138108750036!3d10.865181857550368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a10b0f0554f%3A0x769800e8967d6703!2zNzAgVMO0IEvDvSwgVMOibiBDaMOhbmggSGnhu4dwLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1689436941428!5m2!1sen!2s"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className='block w-full text-sm pb-6 pl-4'>
                <label className='text-xs font-bold block my-1 md:text-md md:mb-4 md:mt-8 md:my-2'>Những phương thức thanh toán</label>
                <img
                  src='https://image.cellphones.com.vn/x35/media/logo/payment/moca-logo.png'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://image.cellphones.com.vn/x35/media/logo/payment/zalopay-logo.png'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://image.cellphones.com.vn/x35/media/logo/payment/vnpay-logo.png'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://image.cellphones.com.vn/x35/media/logo/payment/mpos-logo.png'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://fptshop.com.vn/Content/v4/images/ft-img6.png?v=1'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://fptshop.com.vn/Content/v4/images/ft-img7.png?v=1'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://fptshop.com.vn/Content/v4/images/ft-img9.png?v=1'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://fptshop.com.vn/Content/v4/images/ft-img14.png?v=1'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
                <img
                  src='https://fptshop.com.vn/Content/v4/images/ft-img8.png?v=1'
                  width="46"
                  className='inline-block mr-2 mb-2 w-1/6 object-contain'
                />
              </div>
            </div>

            <div className='w-1/2 md:mr-2 md:w-1/4 lg:w-1/4 xl:w-1/4'>
              <div className='block w-full text-sm pb-6 pl-4'>
                <label className='text-xs font-bold block my-1 md:text-md md:mb-4 md:mt-8 md:my-2'>Thông tin, chính sách và điều khoản sử dụng</label>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Mua hàng và thanh toán</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Mua trả góp sản phẩm</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Tra cứu thông tin đơn hàng</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Tra cứu ưu đãi</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Tra cứu thông tin bảo hành</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Tra cứu hóa đơn điện tử</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Chính sách bảo hành</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Chính sách hậu mãi</a>
                <a href='/policy' className='block decoration-none text-xs text-gray-700 my-2 py-2 md:text-sm'>Điều khoản sử dụng</a>

              </div>
            </div>

            <div className='w-1/2 md:mr-2 md:w-1/4 lg:w-1/4 xl:w-1/4'>
              <div className='block w-full text-sm pb-6 pl-4'>
                <label className='text-xs font-bold block my-1 md:text-md md:mb-4 md:mt-8 md:my-2'>Tổng đài viên hỗ trợ 24/7 <span className='font-semibold text-red-500'>(Miễn phí tư vấn)</span></label>
                <div className='block decoration-none text-xs text-gray-700 my-1 py-2 md:my-4 md:text-sm'>
                  <p className='inline w-full mr-1 md:mr-4'>Hỗ trợ mua hàng:</p>
                  <span className='inline font-semibold text-blue-600 text-xs pr-2 md:pr-4 md:text-sm'>1800 3234</span>
                  <span className='hidden md:inline lg:inline xl:inline'>(24/7)</span>
                </div>
                <div className='block decoration-none text-xs text-gray-700 my-1 py-2 md:my-4 md:text-sm'>
                  <p className='inline w-full mr-1 md:mr-4'>Hỗ trợ kỹ thuật:</p>
                  <span className='inline font-semibold text-blue-600 text-xs pr-2 md:pr-4 md:text-sm'>1800 1234</span>
                  <span className='hidden md:inline lg:inline xl:inline'>(Giờ hành chính)</span>
                </div>
                <div className='block decoration-none text-xs text-gray-700 my-1 py-2 md:my-4 md:text-sm'>
                  <p className='inline w-full mr-1 md:mr-4'>Giải quyết khiếu nại:</p>
                  <span className='inline font-semibold text-blue-600 text-xs pr-2 md:pr-4 md:text-sm'>1800 4321</span>
                  <span className='hidden md:inline lg:inline xl:inline'>(24/7)</span>
                </div>
                <div className='block decoration-none text-xs text-gray-700 my-1 py-2 md:my-4 md:text-sm'>
                  <p className='inline w-full mr-1 md:mr-4'>Bảo hành sản phẩm:</p>
                  <span className='inline font-semibold text-blue-600 text-xs pr-2 md:pr-4 md:text-sm'>1800 3234</span>
                  <span className='hidden md:inline lg:inline xl:inline'>(Giờ hành chính)</span>
                </div>
                <div className='block decoration-none text-xs text-gray-700 my-1 py-2 md:my-4 md:text-sm'>
                  <p className='inline w-full mr-1 md:mr-4'>Vấn đề khác:</p>
                  <span className='inline font-semibold text-blue-600 text-xs pr-2 md:pr-4 md:text-sm'>1800 3234</span>
                  <span className='hidden md:inline lg:inline xl:inline'>(Giờ hành chính)</span>
                </div>
              </div>
            </div>

            <div className='w-1/2 md:mr-2 md:w-1/4 lg:w-1/4 xl:w-1/4'>
              <div className='block w-full text-sm pb-6 pl-4'>
                <label className='text-xs font-bold block my-1 md:text-md md:mb-4 md:mt-8 md:my-2'>KẾT NỐI VỚI CHÚNG TÔI - ShopTECH BESIDE YOU</label>
                <img src='https://image.cellphones.com.vn/44x/media/logo/social/cellphones-facebook.png' width="46" style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://image.cellphones.com.vn/44x/media/logo/social/cellphones-zalo.png' width="46" style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://image.cellphones.com.vn/44x/media/logo/social/cellphones-youtube.png' width="46" style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://image.cellphones.com.vn/44x/media/logo/social/cellphones-tiktok.png' width="46" style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://image.cellphones.com.vn/44x/media/logo/social/cellphones-instagram.png' width="46" style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='data:image/png;base64,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' width="46" style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img />


              </div>

              <div className='block w-full text-sm pb-6 pl-4'>
                <label className='text-xs font-bold block my-1 md:text-md md:mb-4 md:mt-8 md:my-2' style={{ width: "100%" }}>Chứng nhận</label>
                <img src='https://fptshop.com.vn/Content/v4/images/ft-img1.png?v=1' width={40} style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://fptshop.com.vn/Content/v4/images/ft-img2.png?v=1' width={100} style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://fptshop.com.vn/Content/v4/images/ft-img3.png?v=1' width={80} style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://fptshop.com.vn/Content/v4/images/ft-img4.png?v=1' width={80} style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
                <img src='https://fptshop.com.vn/Content/v4/images/ft-img5.png?v=1' width={80} style={{ padding: "0 2px" }} className='inline-block mr-2 mb-2 w-1/6 object-contain' />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full bg-transparent mb-20">
        <p className='text-xs text-center w-full px-2 md:text-sm'>©️ Bản quyền thuộc ShopTECH - năm 2023 <br />
          Địa chỉ: 70 Tô Ký, phường Tân Chánh Hiệp. Quận 12, Thành phố Hồ Chí Minh.</p>
      </div>
    </>
  );
}

export default Footer