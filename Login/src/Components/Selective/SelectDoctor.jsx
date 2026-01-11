import React from 'react'
import './SelectDoctor.css';
import { Link } from 'react-router-dom'
function SelectDoctor({ item }) {
    return (
        <>

            <div className='select-main'>
                <div className='face-card'>

                    <div class="info-left">
                        <div class="doctor-avatar">
                            <img src={item.doctor_image} alt="Avatar" />
                            <a className='link_main' href="">Xem thêm</a>
                        </div>


                        <div class="doctor-desc">
                            <div class="tag-fav">Yêu thích</div>
                            <h2 class="name">PGS. TS. BSCKII. TTUT {item.doctor_name}</h2>
                            <p class="summary">{item.description}</p>
                            <div class="city">Hà Nội</div>
                        </div>
                    </div>

                    <div class="booking-right">
                        <div class="date-select">Thứ 2 - 12/1 ▾</div>
                        <div class="schedule-head">LỊCH KHÁM</div>

                        <div class="time-grid">
                            <a href="#" class="btn-time">09:00 - 09:30</a>
                            <a href="#" class="btn-time">09:30 - 10:00</a>
                        </div>

                        <div class="clinic-info">
                            <div class="label">ĐỊA CHỈ KHÁM</div>
                            <div class="clinic-name">Phòng khám Spinetech Clinic</div>
                            <div class="address">Tòa nhà GP, 257 Giải Phóng, Hà Nội</div>
                        </div>

                        <div class="price">
                            GIÁ KHÁM: 500.000đ - <a href="#">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SelectDoctor
