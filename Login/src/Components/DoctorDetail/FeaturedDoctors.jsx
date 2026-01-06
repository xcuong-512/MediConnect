import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './FeaturedDoctors.css';

const FeaturedDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await api.get('/doctors');
                setDoctors(response.data.data);
            } catch (error) {
                console.error("Lỗi tải bác sĩ:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDoctors();
    }, []);

    const getAvatarUrl = (avatar) => {
        if (!avatar) {
            console.log("Ảnh mặc định (do null)");
            return "https://placehold.co/300x300?text=No+Data";
        }

        if (avatar.startsWith('http')) {
            return avatar;
        }

        const cleanName = avatar.replace(/^doctors\//, '').replace(/^\//, '');

        const finalUrl = `/doctors/${cleanName}`;

        console.log(`Tên file gốc: ${avatar} | Đường dẫn tạo ra: ${finalUrl}`);

        return finalUrl;
    };

    return (
        <div className="featured-doctors-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Đội Ngũ Bác Sĩ</h2>
                    <p className="text-gray-500 mt-2">Các chuyên gia y tế hàng đầu sẵn sàng hỗ trợ bạn</p>
                </div>

                {loading ? (
                    <div className="text-center text-gray-500">Đang tải...</div>
                ) : (
                    <div className="doctors-scroll-container">
                        {doctors.length > 0 ? (
                            doctors.map((doctor) => (
                                <div key={doctor.id} className="doctor-card">
                                    <div className="doctor-img-wrapper">
                                        <img
                                            src={getAvatarUrl(doctor.avatar)}
                                            alt={doctor.full_name}
                                            className="doctor-img"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/300x300?text=Doctor";
                                            }}
                                        />
                                    </div>
                                    <div className="doctor-info">
                                        <h3 className="doctor-name">{doctor.full_name}</h3>
                                        <p className="doctor-specialty">
                                            {doctor.departments && doctor.departments.length > 0
                                                ? doctor.departments.join(', ')
                                                : 'Chuyên khoa'}
                                        </p>
                                        <Link to={`/doctor/${doctor.id}`} className="book-btn">
                                            Đặt Lịch Ngay
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-full text-center text-red-500">Chưa có dữ liệu bác sĩ.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeaturedDoctors;