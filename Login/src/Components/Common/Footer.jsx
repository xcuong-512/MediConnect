import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className='thery-icon'>
                    <img className='doctor-icon' src="../../../public/img/Bachmai.png" alt="" />
                    {/* Add thêm email và phải có mailto để khi ấn vào có thể gửi mail luôn cho trung tâm */}
                    <div className="infor">
                        <p>Địa chỉ: 78 Đường Giải Phóng, Phường Kim Liên, Thành phố Hà Nội</p>
                        <p>Tổng đài: 198765000</p>
                        {/* Bọc số điện thoại bằng thẻ a và thêm thuộc tính tel để có thể chuyển qua tab gọi điện */}
                        <p>Hotline: 096.985.1616</p>

                    </div>
                </div>


                <div className="sevices">
                    <a href=""><p>Gọi tổng đài</p></a>
                    <a href=""> <p>Đặt lịch khám</p></a>
                    <a href=""> <p>Hỏi đáp cùng chuyên gia</p></a>
                    <a href=""> <p>Tra cứu kết quả xét nghiệm</p></a>
                </div>

                {/* Phần này thiếu cursor:pointer */}
                <div className="footer-menu">
                    <p>Về Bạch Mai</p>
                    <p>Đơn vị chuyên khoa</p>
                    <p>Đội ngũ bác sĩ</p>
                    <p>Tin hoạt động bệnh viện</p>
                    <p>Tin mới thầu</p>
                </div>
            </div>
            <div className='last-footer'>
                <p className='last-p'>© 2025 MediConnect. All rights reserved.
                </p>
                <div className='social-icon'>
                    <a className='iconer' href="#"><FaFacebookF /></a>
                    <a className='iconer' href="#"><FaInstagram /></a>
                    <a className='iconer' href="#"><FaYoutube /></a>
                </div>
            </div>



        </>
    )
}
export default Footer