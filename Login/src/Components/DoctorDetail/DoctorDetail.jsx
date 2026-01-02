import React, { useEffect, useState } from 'react'
import "./DoctorDetail.css"
import { Link } from 'react-router-dom';
function DoctorDetail() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/doctor')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
    }, [])
    return (
        <div className='main-detail'>
            <nav className="breadcrumb-container">
                <div className="breadcrumb-content">
                    <Link to="/" className="breadcrumb-home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="#45c3d2">
                            <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8z"></path>
                        </svg>
                    </Link>
                    <div className="breadcrumb-path">
                        <span className="separator">/</span>
                        <span className="current-page">Featured Doctors</span>
                    </div>
                </div>
            </nav>
            <div className="doctor-featured-wrapper">
                <h2 className="doctor-featured-heading">Featured Doctors
                </h2>
            </div>

            <div className='doctor-list-container'>
                {data.map((items, index) => (
                    <Link to={`/infor/${items.id}`} className='detail-card'>
                        <div className="doctor-avatar">
                            <img src={items.image}
                                alt={items.position}
                                className="doctor-img" />
                        </div>

                        <div className="doctor-info">
                            <h3 className="doctor-name">{items.position} {items.name}</h3>
                            <p className="doctor-specialty">{items.specialty}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DoctorDetail
