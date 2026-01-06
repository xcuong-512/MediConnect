import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className='thery-icon'>
                    <img className='doctor-icon' src='https://cdn.vectorstock.com/i/1000v/44/29/healthcare-medical-logo-icon-for-ambulance-vector-26674429.jpg' alt="" />
                    {/* Add thêm email và phải có mailto để khi ấn vào có thể gửi mail luôn cho trung tâm */}
                    <div className="infor">
                        <p>Address: 78 Giai Phong Street, Kim Lien Ward, Hanoi City</p>
                        <p>Hotline: 198765000</p>
                        <p>Email Us:<a style={{ textDecoration: "none", color: "white" }} href="mailto:support@mediconnect.vn"> support@mediconnect.vn</a></p>
                        {/* Bọc số điện thoại bằng thẻ a và thêm thuộc tính tel để có thể chuyển qua tab gọi điện */}
                        <p><a style={{ textDecoration: "none", color: "white" }} href='tel:098765432'>Mobile Number: 098765432</a></p>

                    </div>
                </div>


                <div className="sevices">
                    <a href="tel:198765000"> <p>Call Hotline</p></a>
                    <a href=""> <p>Book Appointment</p></a>
                    <a href=""> <p>Ask an Expert</p></a>
                    <a href=""> <p>View Test Results</p></a>
                </div>

                {/* Phần này thiếu cursor:pointer */}
                <div className="footer-menu">
                    <p>About Bach Mai Hospital</p>
                    <p>Specialized Departments</p>
                    <p>Medical Staff</p>
                    <p>Hospital News & Activities</p>
                    <p>Tenders & Procurement</p>
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