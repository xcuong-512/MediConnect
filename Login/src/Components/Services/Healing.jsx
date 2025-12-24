import React from 'react'
import "./Healing.css";
import mind from "../Common/data/DoctorSpirit"
import HealingChild from './HealingChild';
function Healing() {
    return (
        <>
            <div className='main-booking'>
                <div className='booking-title'>
                    <h4 className='high-4'> Gợi ý của BookingCare  </h4>
                </div>

                <div className='booking-container'>
                    <a href="" className='booking-link'>
                        <div className='booking-card'>
                            <img className='booking-image' src="https://cdn.bookingcare.vn/fo/w640/2024/01/12/144801-3.png" alt="" />
                        </div>
                        <p className='booking-text'>Được quan tâm</p>
                    </a>

                    <a href="" className='booking-link'>
                        <div className='booking-card'>
                            <img className='booking-image' src="https://cdn.bookingcare.vn/fo/w640/2024/01/12/144801-4.png" alt="" />
                        </div>
                        <p className='booking-text'>Y tế nổi bật</p>
                    </a>
                </div>
            </div>

            <section className='spirit-section'>
                <div className='spirit-main'>
                    <div className='booking-title'>
                        <h4 className='high-4'> Sức khỏe tinh thần  </h4>
                    </div>

                    <div className='specialty-scroll-wrapper'>
                        <div className='specialty-list-container'>
                            {mind.map((m, index) => (
                                <HealingChild key={m.id || index} minder={m} />
                            ))}
                        </div>
                    </div>


                </div>
            </section>

            <div className='main-booking'>
                <div className='booking-title'>
                    <h4 className='high-4'> Bác sĩ hỏi đáp </h4>
                </div>
                <div className='ask-box'>
                    <a href="" className='ask-link'>
                        <div className='card-ask'>
                            <img className='ask-image' src="https://cdn.bookingcare.vn/fo/w640/2023/11/01/141028-hoidapcongdong.jpeg" alt="" />
                            <p className='ask-doctor'>Hỏi bác sĩ miễn phí</p>
                        </div>


                    </a>

                    <a href="" className='ask-link'>
                        <div className='card-ask'>
                            <img className='ask-image' src="https://cdn.bookingcare.vn/fo/w640/2024/04/23/150322-z5375466237591689132201a679526eaab9274b8cd39a9.jpg" alt="" />

                            <p className='ask-doctor'>Cẩm nang hỏi đáp</p>

                        </div>


                    </a>
                </div>


            </div>
        </>
    )
}

export default Healing
