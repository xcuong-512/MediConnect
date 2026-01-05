import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../Layout';
import { Link } from 'react-router-dom';
function Search() {
    const [doctor, setDoctor] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const specialty = params.get('specialty');

        if (!specialty) return;

        fetch(`http://127.0.0.1:8000/api/dentist?specialty=${specialty}`)
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, [location.search]);

    return (
        <Layout>
            {doctor.map(d => (
                <div key={d.id}>
                    <nav className="breadcrumb-container">
                        <div className="breadcrumb-content">
                            <Link to="/" className="breadcrumb-home">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="#45c3d2">
                                    <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8z" />
                                </svg>
                            </Link>

                            <div className="breadcrumb-path">
                                <span className="separator">/</span>
                                <span>Specialist examination</span>
                                <span className="separator">/</span>
                                <span>{d.specialty}</span>
                                <span className="separator">/</span>
                                <span>{d.position}, {d.name}</span>
                            </div>
                        </div>
                    </nav>

                    <div className="slider-doctor">
                        <div className='doctor_container'>
                            <img src={d.image} alt={d.name} className='doctor-slider' />
                        </div>

                        <div className='doctor_information'>
                            <h1 className='user_doctor'>{d.position} {d.name}</h1>

                            <p className='doctor-summary'>
                                {d.practical_experience}
                            </p>


                            <div className='doctor-location'>
                                <svg xml:space="preserve" width="14" height="14" viewBox="0 0 42 42" fill="#555">
                                    <path fill-rule="evenodd" d="M33 13.924C33 6.893 27.594 1 20.51 1S8 6.897 8 13.93C8 16.25 8.324 18 9.423 20h-.021l10.695 20.621c.402.551.824-.032.824-.032C20.56 41.13 31.616 20 31.616 20h-.009C32.695 18 33 16.246 33 13.924m-18.249-.396c0-3.317 2.579-6.004 5.759-6.004 3.179 0 5.76 2.687 5.76 6.004s-2.581 6.005-5.76 6.005c-3.18 0-5.759-2.687-5.759-6.005"></path>
                                </svg>
                                <span>{d.city_name}</span>
                            </div>

                            <div class="share-button-container">
                                <a href="#" class="share-button">Chia sẻ</a>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div class="booking-container">
                        <div class="booking-wrapper">
                            <div class="schedule-section">
                                <div class="date-picker">
                                    <span class="current-date">Thứ 2 - 5/1</span>
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="#337ab7"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path></svg>
                                </div>

                                <div class="section-title">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="#333"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"></path></svg>
                                    <span>LỊCH KHÁM</span>
                                </div>

                                <div class="time-slots">
                                    <a href="#" class="time-item">09:00 - 09:30</a>
                                    <a href="#" class="time-item">09:30 - 10:00</a>
                                    <a href="#" class="time-item">10:00 - 10:30</a>
                                    <a href="#" class="time-item">10:30 - 11:00</a>
                                    <a href="#" class="time-item">11:00 - 11:30</a>
                                    <a href="#" class="time-item">11:30 - 12:00</a>
                                </div>

                                <div class="booking-note">
                                    <span>Chọn </span>
                                    <svg viewBox="0 0 448 512" width="14" height="14" fill="#333"><path d="M105.6 83.2v86.177a115.52 115.52 0 0 0-22.4-2.176c-47.914 0-83.2 35.072-83.2 92 0 45.314 48.537 57.002 78.784 75.707 12.413 7.735 23.317 16.994 33.253 25.851l.146.131.148.129C129.807 376.338 136 384.236 136 391.2v2.679c-4.952 5.747-8 13.536-8 22.12v64c0 17.673 12.894 32 28.8 32h230.4c15.906 0 28.8-14.327 28.8-32v-64c0-8.584-3.048-16.373-8-22.12V391.2c0-28.688 40-67.137 40-127.2v-21.299c0-62.542-38.658-98.8-91.145-99.94-17.813-12.482-40.785-18.491-62.791-15.985A93.148 93.148 0 0 0 272 118.847V83.2C272 37.765 234.416 0 188.8 0c-45.099 0-83.2 38.101-83.2 83.2m118.4 0v91.026c14.669-12.837 42.825-14.415 61.05 4.95 19.646-11.227 45.624-1.687 53.625 12.925 39.128-6.524 61.325 10.076 61.325 50.6V264c0 45.491-35.913 77.21-39.676 120H183.571c-2.964-25.239-21.222-42.966-39.596-59.075-12.65-11.275-25.3-21.725-39.875-30.799C80.712 279.645 48 267.994 48 259.2c0-23.375 8.8-44 35.2-44 35.2 0 53.075 26.4 70.4 26.4V83.2c0-18.425 16.5-35.2 35.2-35.2 18.975 0 35.2 16.225 35.2 35.2M352 424c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24"></path></svg>
                                    <span> và đặt (Phí đặt lịch 0đ)</span>
                                </div>
                            </div>

                            <div class="info-section">
                                <div class="address-block">
                                    <div class="label">ĐỊA CHỈ KHÁM</div>
                                    <div class="clinic-name">Bệnh viện Đa khoa Quốc tế Thu Cúc cơ sở Thụy Khuê</div>
                                    <div class="address-detail">286, 288, 290, 292, 294 Thụy Khuê, Phường Tây Hồ, Thành phố Hà Nội.</div>
                                </div>

                                <div class="price-block">
                                    <span class="label">GIÁ KHÁM:</span>
                                    <span class="price">250.000đ</span>
                                    <span class="detail-link">Xem chi tiết</span>
                                </div>

                                <div class="insurance-block">
                                    <span class="label">LOẠI BẢO HIỂM ÁP DỤNG.</span>
                                    <span class="detail-link">Xem chi tiết</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    );

}
export default Search;

