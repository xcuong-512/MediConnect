import React from 'react'
import './Hero.css'
import { FaSearch } from 'react-icons/fa';
function Hero() {
    return (
        <>
            <div className='main-hero'>
                <div className='hero-title'>
                    Nền tảng đặt lịch khám bệnh , chăm sóc răng miệng làm đẹp
                </div>
                <div className='search-container'>
                    <input type="text" placeholder='Nhập tên bác sĩ' className='search-bar' />
                    <FaSearch className='search-icon' />
                </div>
                <div className='ai-title'>
                    Sản phẩm hỗ trợ bởi AI
                </div>

                <div className='ai-support-container'>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/499773/calendar.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Trợ lý Ai đặt lịch</p>
                            <p className='box-text'>Tìm kiếm thông tin bác sĩ, nơi khám và đặt lịch khám</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://cdn.bookingcare.vn/fo/w828/2025/09/09/142548-phauthuatthammy.png" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Trợ lý thẩm mỹ</p>
                            <p className='box-text'>Tìm kiếm địa chỉ, bác sĩ thẩm mỹ uy tín.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/318506/wash-teeth.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Trợ lý niềng răng</p>
                            <p className='box-text'>Tìm kiếm địa chỉ, bác sĩ niềng răng giàu kinh nghiệm.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://cdn.bookingcare.vn/fo/w1920/2025/09/09/142548-dalieutrimun.png" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Trợ lý trị mụn</p>
                            <p className='box-text'>Tìm bác sĩ, dịch vụ, cơ sở chuyên về điều trị mụn.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/122960/tooth.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Dental Trip</p>
                            <p className='box-text'>Nền tảng nha khoa du lịch dành riêng cho người nước ngoài.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='boxer-image'>
                            <img src="https://www.svgrepo.com/show/345371/reminder-notice-drug-alert-healthy-medicine-healthcare.svg" alt="" className='box-img' />
                        </div>

                        <div className='box-span'>
                            <p className='box-title'>Trợ lý chuẩn đoán</p>
                            <p className='box-text'>Chuẩn đoán dấu hiệu của bệnh nhân</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
