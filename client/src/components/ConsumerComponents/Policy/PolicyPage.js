import React, { useEffect } from 'react'
import { Breadcrumbs, Footer, Nav } from '../Common'
import "./policy.css"

const PolicyPage = () => {
    useEffect(() => { document.title = "ShopTECH | Chính sách và điều kiện" }, [])

    return (
        <>
            <Nav />
            <Breadcrumbs />
            <div className="grid wide">
                <div className="container" >
                    <div className="policy__container">
                        <div className="policy__box">
                            <h2 className="policy__header">Chính sách đổi trả sản phẩm</h2>
                            <p className="policy__describe">Chính sách đổi trả khi mua hàng tại ShopTech</p>
                            <p className="policy__content">Nhằm mang lại sự thuận tiện và hài lòng
                                cho khách hàng, ShopTech có những chính sách phù hợp khi khách hàng
                                có nhu cầu đổi/ trả sản phẩm. Chúng tôi hy vọng những sản phẩm khách hàng đã chọn là sản phẩm ưng ý
                                nhất. Việc đổi/ trả sản phẩm đi kèm theo các điều kiện cụ thể, Quý khách vui lòng tham khảo thông tin chi
                                tiết bên dưới: </p>
                            <ol className='policy__content-group' type="I">
                                <li style={{ fontWeight: 600, fontSize: "2rem", lineHeight: "2.4rem", padding: "6px 0" }}>Quy định đổi/ trả hàng</li>
                                <ol type="1">
                                    <li >
                                        <label className="policy__title">Các trường hợp được đổi/ trả hàng</label>
                                        <p><strong>Hàng giao bị lỗi kĩ thuật:</strong></p>
                                        <p className='policy__content'>Sản phẩm chỉ được xem là lỗi kĩ thuật khi được xác nhận từ chính Trung tâm kĩ thuật hoặc
                                            Trung tâm bảo hành của sản phẩm. Khi Quý khách gặp trục trặc với sản phẩm đặt mua tại
                                            ShopTECH, vui lòng thực hiện các bước sau đây:</p>
                                        <ul type="disc" className='policy__list-disc'>
                                            <li>
                                                <p>Bước 1: Tự kiểm tra cách thức sử dụng sản phẩm, các thao tác được hướng dẫn trong
                                                    “Sách
                                                    hướng dẫn sử dụng” đi kèm với mỗi sản phẩm (nếu có).</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Bước 2: Quý khách liên hệ với trung tâm kĩ thuật/ bảo hành: HOTLINE 1800 6063 hoặc
                                                    email: info@shoptech.vn Đối với một vài dòng sản phẩm tiêu biểu,
                                                    Quý khách có thể tìm thấy thông tin bảo hành tại: Hệ thống cửa hàng gần nhất.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Bước 3: Trong vòng 07 ngày kể từ ngày nhận hàng, nếu Quý khách được xác nhận từ
                                                    Trung tâm kĩ thuật hoặc Trung tâm bảo hành của sản phẩm rằng sản phẩm bị lỗi kỹ
                                                    thuật.
                                                </p>
                                            </li>
                                            <li>
                                                <p> Nếu không thể liên hệ với trung tâm kĩ thuật/ bảo hành của sản phẩm, hãy liên lạc
                                                    ngay với ShopTech, HOTLINE: 1800 6063
                                                </p>
                                            </li>
                                        </ul>
                                        <p className='policy__content'>Theo kinh nghiệm của chúng tôi, hơn một nửa sản phẩm hoàn về vì lí do lỗi kỹ thuật sau khi
                                            được bộ phận kĩ thuật kiểm tra đều được đánh giá sản phẩm nằm trong điều kiện sử dụng hoàn
                                            hảo. Vì vậy, để tiết kiệm thời gian và thuận tiện cho Quý khách, vui lòng đọc kĩ hướng dẫn
                                            sử dụng hoặc liên hệ tham vấn trực tiếp với bộ phận hỗ trợ kĩ thuật của sản phẩm để chắc
                                            rằng sản phẩm đã được lắp ráp, kết nối và vận hành chính xác trước khi gửi hàng về lại
                                            ShopTech.</p>
                                        <p><strong>Hàng giao bị bể vỡ, sai nội dung hoặc bị thiếu</strong></p>
                                        <p className='policy__content'>
                                            ShopTECH khuyến khích Quý khách hàng phải kiểm tra tình trạng bên ngoài của thùng hàng và
                                            sản phẩm trước khi thanh toán để đảm bảo rằng hàng hóa được giao đúng chủng loại, số lượng,
                                            màu sắc theo đơn đặt hàng và tình trạng bên ngoài không bị tác động (bể vỡ/ trầy xước). Nếu
                                            gặp trường hợp này, Quý khách vui lòng từ chối nhận hàng và/hoặc báo ngay cho bộ phận hỗ trợ
                                            khách hàng HOTLINE: 1800 6063 để chúng tôi có phương án xử lí kịp thời.
                                        </p>
                                        <p className='policy__content'>
                                            Trong trường hợp khách hàng đã thanh toán, nhận hàng và sau đó phát hiện hàng hóa bị bể vỡ,
                                            sai nội dung hoặc thiếu hàng, xin vui lòng chụp ảnh sản phẩm gửi về hộp thư
                                            info@shoptech.vn để được chúng tôi hỗ trợ các bước tiếp theo như đổi/trả hàng hoặc gửi
                                            sản phẩm còn thiếu đến Quý khách.
                                        </p>
                                        <p className='policy__content'>
                                            Sau 48h kể từ khi Quý khách nhận hàng, ShopTech có quyền từ chối hỗ trợ cho những khiếu nại
                                            theo nội dung như trên.
                                        </p>
                                    </li>
                                    <li>
                                        <label className="policy__title"> Danh mục miễn đổi/ trả (sản phẩm không áp dụng đổi trả)</label>

                                        <ul type="disc" className="policy__list-disc">
                                            <li>
                                                <p>Sản phẩm khuyến mãi (có giá giảm từ 10% trở lên so với giá gốc), hàng đồng giá.
                                                </p>
                                            </li>

                                            <li>
                                                <p>Sản phẩm đổi trả không do lỗi kỹ thuật. </p>
                                            </li>

                                            <li>
                                                <p>Phụ kiện. </p>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>
                                        <label className="policy__title">Điều kiện đổi hàng</label>
                                        <p className="policy__content">Quý khách vui lòng đọc kỹ các quy định được nêu rõ trong Chính sách đổi trả hàng của chúng
                                            tôi để đảm bảo rằng sản phẩm/ hàng hóa yêu cầu đổi/ trả thỏa mãn tất cả các điều kiện sau
                                            đây:
                                        </p>
                                        <ul type="disc" className="policy__list-disc">
                                            <li>
                                                <p>Sản phẩm thực hiện đổi trả phải được Quý khách đặt mua online hoặc mua tại hệ thống
                                                    cửa hàng.</p>
                                            </li>
                                            <li>
                                                <p>Còn nguyên đóng gói và bao bì không bị móp rách.</p>
                                            </li>
                                            <li>
                                                <p>Tem/ phiếu bảo hành, tem thương hiệu, hướng dẫn kỹ thuật và các quà tặng kèm theo
                                                    (nếu có) v.v… phải còn đầy đủ và nguyên vẹn.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Không có dữ liệu trong sản phẩm có thiết bị lưu trữ.</p>
                                            </li>
                                            <li>
                                                <p>Không bị dơ bẩn, trầy xước, bể vỡ, hư hỏng, có mùi lạ hoặc có dấu hiệu đã qua giặt
                                                    tẩy hoặc qua sử dụng.</p>
                                            </li>
                                            <li>
                                                <p>Hàng chỉ được chấp nhận đổi để lấy một sản phẩm tương tự (cùng mẫu), một sản phẩm
                                                    khác (cùng nhãn hàng) có giá trị tương đương hoặc giá trị thấp hơn.</p>
                                            </li>
                                            <li>
                                                <p>Yêu cầu Quý khách phải có hóa đơn mua hàng khi đổi hàng. Công ty không chấp nhận việc
                                                    đổi hàng nếu không kèm chứng từ trên.</p>
                                            </li>
                                            <li>
                                                <p>Các bộ phận, chi tiết, phụ kiện, tài liệu hướng dẫn sử dụng, quà tặng kèm theo (nếu
                                                    có), v.v… phải còn đầy đủ và chưa có dấu hiệu sử dụng.</p>
                                            </li>
                                            <li>
                                                <p>Mỗi đơn hàng chỉ được hỗ trợ đổi 1 lần.</p>
                                            </li>
                                            <li>
                                                <p>Những sản phẩm đổi trả nếu không đáp ứng các điều kiện nêu trên sẽ được tự động
                                                    chuyển hoàn về địa chỉ đã được Quý khách đăng ký trong đơn hàng.
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <label className="policy__title">Thời gian đổi hàng</label>
                                        <p className="policy__content">Thời gian áp dụng đổi trả hàng hóa mua tại hệ thống cửa hàng thuộc hệ thống cửa hàng là 3-7
                                            ngày.
                                        </p>
                                        <p className='policy__content'>Đối với khách hàng đặt hàng tại website của ShopTech, thời gian đổi trả là 3-7 ngày tính từ
                                            ngày Quý khách nhận được sản phẩm.</p>
                                    </li>
                                    <li>
                                        <label className="policy__title">Chi phí đổi trả</label>
                                        <p className="policy__content">Đối với các sản phẩm đổi lại do lỗi kỹ thuật, khách hàng sẽ được miễn phí đổi trả và được
                                            giao hàng miễn phí tới địa điểm ghi trên phiếu yêu cầu đổi trả.</p>
                                        <p className="policy__content">Đối với các sản phẩm đổi lại do ý chủ quan từ khách hàng, Quý khách sẽ thanh toán phí vận
                                            chuyển 2 chiều. </p>
                                    </li>
                                </ol>
                                <li >
                                    <lable style={{ fontWeight: 600, fontSize: "2rem", lineHeight: "2.4rem", padding: "6px 0" }}>Quy định trả hàng và hoàn tiền</lable>
                                    <p className='policy__content'>Tùy theo lý do hoàn trả sản phẩm và kết quả đánh giá chất lượng , chúng tôi sẽ có những phương
                                        thức hoàn trả phù hợp</p>
                                    <ol type="1">
                                        <li><label className="policy__title">Đổi sản phẩm mới</label>
                                            <ul type="disc" className="policy__list-disc">
                                                <li>
                                                    <p>Hình thức này được áp dụng đối với các trường hợp sản phẩm bị hỏng do lỗi của nhà
                                                        sản
                                                        xuất. Chúng tôi sẽ đổi lại cho Quý khách sản phẩm mới có cùng mẫu mã (cùng mã
                                                        sản
                                                        phẩm, cùng size, cùng nhãn hàng…).</p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Đối với trường hợp hệ thống của chúng tôi đã hết mã sản phẩm như trong đơn hàng
                                                        của
                                                        Quý khách, chúng tôi sẽ đổi cho Quý khách một sản phẩm khác (cùng nhãn hàng) có
                                                        giá
                                                        trị tương đương.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <label className="policy__title">Hoàn tiền</label>
                                            <ul type="disc" className="policy__list-disc">
                                                <li>
                                                    <p>Việc hoàn tiền (chỉ áp dụng đối với trường hợp sản phẩm lỗi mà không có sản phẩm
                                                        thay
                                                        thế). Việc hoàn tiền trong trường hợp này sẽ được thực hiện qua chuyển khoản
                                                        ngân
                                                        hàng theo thông tin tài khoản mà Quý khách cung cấp.</p>
                                                </li>
                                                <li>
                                                    <p>Hiện tại, chúng tôi chưa áp dụng hình thức hoàn trả tiền mặt tại văn phòng cho
                                                        tất cả
                                                        các trường hợp đổi/ trả sản phẩm.</p>
                                                </li>
                                                <li>
                                                    <p>Thời gian xử lý: Nếu yêu cầu hoàn trả của khách hàng đáp ứng đủ các điều kiện
                                                        đổi/
                                                        trả hàng, hol.com.vn sẽ thực hiện thủ tục hoàn tiền cho khách hàng trong vòng 30
                                                        ngày kể từ ngày nhận được thông tin tài khoản của Quý khách.</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>

                        <div className="policy__box">
                            <h2 className="policy__header">Chính sách vận chuyển</h2>
                            <ol>
                                <li>
                                    <label className="policy__title">Hình thức vận chuyển & giao nhận hàng hóa</label>
                                    <p className='policy__content'>Khi mua hàng tại ShopTech, quý khách có thể lựa chọn một trong các hình thức vận chuyển, giao
                                        nhận sau:</p>
                                    <ul type="disc" className='policy__list-disc'>
                                        <li>
                                            <p>ShopTech trực tiếp vận chuyển và giao hàng tận tay khách hàng.</p>
                                        </li>
                                        <li>
                                            <p>ShopTech giao hàng cho khách hàng thông qua các nhà cung cấp dịch vụ chuyển phát.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label className="policy__title">Chi phí và thời gian giao hàng</label>
                                    <ol type="1">
                                        <li>
                                            <p>ShopTech trực tiếp vận chuyển và giao hàng tận tay khách hàng</p>
                                            <ul type="disc" className='policy__list-disc'>
                                                <li>
                                                    <p>Miễn phí giao hàng: Khoảng cách lên tới 300km.</p>
                                                </li>
                                                <li>
                                                    <p>Khung giờ giao hàng từ 8h00 đến 21h00 hàng ngày.</p>
                                                </li>
                                                <li>
                                                    <p>Chi phí giao hàng giao động từ 15.000đ đến 50.000đ</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>Giao hàng thông qua nhà cung cấp dịch vụ chuyển phát
                                            <p><strong>Cách thức giao hàng:</strong></p>
                                            <ul type="disc" className='policy__list-disc'>
                                                <li>
                                                    <p>ShopTech sẽ lựa chọn một nhà cung cấp dịch vụ chuyển phát để giao hàng tới Khách
                                                        hàng.</p>
                                                </li>
                                                <li>
                                                    <p>Thời gian giao hàng tới địa điểm khách hàng yêu cầu theo chỉ tiêu về thời gian
                                                        giao hàng của nhà cung cấp dịch vụ.</p>
                                                </li>
                                                <li>
                                                    <p>Để thuận tiện và sắp xếp thời gian, địa điểm nhận hàng phù hợp, Quý khách hàng
                                                        vui lòng chủ động liên hệ với đơn vị trung gian để nhận hàng.</p>
                                                </li>
                                            </ul>
                                            <p className='policy__content'>
                                                <strong>Lưu ý:</strong>
                                                Trước khi giao hàng cho đơn vị trung gian vận chuyển, ShopTech có thực hiện niêm phong
                                                và cân hàng hóa; Do đó, Quý khách vui lòng và có trách nhiệm kiểm tra niêm phong và cận
                                                nặng hàng hóa trước khi nhận.
                                            </p>
                                            <p><strong>Quy cách niêm phong:</strong></p>
                                            <ul type="disc" className='policy__list-disc'>
                                                <li>
                                                    <p>Tất cả hàng hoá ShopTech gửi qua đơn vị trung gian đều được cân trọng lượng, dán
                                                        niêm phong trước khi gửi.</p>
                                                </li>
                                                <li>
                                                    <p>Trọng lượng của hàng gửi bao gồm cả vỏ hộp, được ghi rõ trên vỏ hộp bằng bút dạ
                                                        ghi bảng.</p>
                                                </li>
                                                <li>
                                                    <p>Giấy niêm phong có đóng dấu tròn của Công ty hoặc dán băng dính có thương hiệu
                                                        ShopTech.</p>
                                                </li>
                                                <li>
                                                    <p>Trong trường hợp Quý khách hàng phát hiện thấy giấy niêm phong đã bị rách, hoặc
                                                        có dấu hiệu bị mở trước đó và hoặc hàng (bao gồm cả vỏ hộp) không đủ trọng lượng
                                                        được ghi trên vỏ hộp:</p>
                                                </li>
                                                <li>
                                                    <p>Quý khách lập biên bản ngay với đơn vị trung gian vận chuyển.</p>
                                                </li>
                                                <li>
                                                    <p>Thông báo ngay cho nhân viên kinh doanh ShopTech để có hướng giải quyết kịp thời.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                        <div className='policy__box'>
                            <h2 className='policy__header'>Chính sách bảo hành</h2>
                            <ol>
                                <li>
                                    <label className="policy__title">Điều kiện bảo hành</label>
                                    <p className='policy__content'>Sản phẩm đáp ứng các điều kiện sau:</p>
                                    <ul type="disc" className='policy__list-disc'>
                                        <li>
                                            <p>Sản phẩm còn thời gian bảo hành</p>
                                        </li>
                                        <li>
                                            <p>Sản phẩm lỗi kĩ thuật thuộc các tiêu chuẩn của NSX & NPP</p>
                                        </li>
                                        <li>
                                            <p>Số Serial/ Imei/ Service Tag trên sản phẩm phải còn nguyên vẹn rõ nét</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label className="policy__title">Chính sách bảo hành</label>
                                    <ul type="disc" className="policy__list-disc">
                                        <li>
                                            <p>Tất cả các sản phẩm do ShopTech bán ra đều được bảo hành theo quy định của nhà sản xuất
                                            </p>
                                        </li>
                                        <li>
                                            <p>Tất cả sản phẩm hư hỏng, sẽ được gửi cho nhà sản xuất hoặc đơn vị được nhà sản xuất uỷ
                                                quyền để bảo hành theo đúng chính sách bảo hành của nhà sản xuất đưa ra. ShopTech không
                                                chịu trách nhiệm nếu nhà sản xuất và/ hoặc đơn vị được nhà sản xuất ủy quyền từ chối bảo
                                                hành.</p>
                                        </li>
                                        <li>
                                            <p>Dữ liệu (lưu trữ trong sản phẩm: laptop/ máy tính để bàn/ Thẻ nhớ/ Ổ cứng… ) không thuộc
                                                phạm vi bảo hành. Khách Hàng vui lòng tự sao, lưu và/ hoặc xóa dữ liệu, các phần mềm,
                                                ứng dụng, hình ảnh hoặc bất kỳ nội dung nào khác được lưu trữ trong sản phẩm ("Dữ Liệu")
                                                trước khi gửi sản phẩm để bảo hành. ShopTech không chịu trách nhiệm cho bất kỳ thiệt hại
                                                trực tiếp hoặc gián tiếp nào gây ra cho khách hàng nếu Dữ Liệu lưu trong sản phẩm bị
                                                tiết lộ, bị mất, bị hư hỏng và/hoặc bị định dạng lại trong quá trình kiểm tra, xử lý bảo
                                                hành.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label className="policy__title">Hệ thống trung tâm bảo hành của ShopTECH</label>
                                    <ul type="disc" className="policy__list-disc">
                                        <li>
                                            <p><strong>Trung Tâm bảo hành ShopTech Miền Nam</strong>
                                                <br />Địa chỉ: 292/15 Cách Mạng Tháng Tám, Phường 10, Quận 3, TP Hồ Chí Minh
                                                <br />Điện thoại: 1800 6865
                                                <br />Giờ mở cửa: 08h00 - 18h00 các ngày trong tuần
                                            </p>
                                        </li>
                                        <li>
                                            <p><strong>Trung Tâm bảo hành ShopTech Miền Trung</strong>
                                                <br />Địa chỉ: Tầng 2 , 14.16.18 Nguyễn Văn Linh, P. Nam Dương, Q. Hải Châu, Tp.Đà Nẵng
                                                <br />Điện thoại: 1800 6865
                                                <br />Giờ mở cửa: 08h00 - 18h00 từ thứ Hai đến thứ Bảy (Chủ Nhật nghỉ)
                                            </p>
                                        </li>
                                        <li>
                                            <p><strong>Trung Tâm bảo hành ShopTech Miền Bắc</strong>
                                                <br />Địa chỉ: 62 Trần Đại Nghĩa, Phường Đồng Tâm, Quận Hai Bà Trưng, Thành phố Hà Nội
                                                <br />Điện thoại: 1800 6865
                                                <br />Giờ mở cửa: 08h00 - 18h00 từ thứ Hai đến thứ Bảy (Chủ Nhật nghỉ)
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div className='policy__box'>
                            <h2 className='policy__header'>Địa điểm bảo hành</h2>
                            <iframe style={{ border: '1px solid #ccc', borderRadius: '10px', margin: "10px", width: "calc(100% - 20px)" }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0886458054415!2d106.7142257757363!3d10.804522458673446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293dceb22197%3A0x755bb0f39a48d4a6!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaSBUaMOgbmggUGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1689474234718!5m2!1svi!2s"
                                width="100%" height="500" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default PolicyPage