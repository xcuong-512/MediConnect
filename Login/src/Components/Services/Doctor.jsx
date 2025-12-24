import React from 'react'
import "./Doctor.css";
import doctor from "../Common/data/doctor.json"
import ChildDoctor from "./ChildDoctor";
function Doctor() {

    return (
        <>
            <section className='doctor-section'>
                <div className='medical-title'>
                    <h4 className='high-4'>Bác sĩ nổi bật</h4>
                    <a href="/" class="btn-xem-them">
                        <span>Xem thêm</span>
                    </a>
                </div>

                <div className='scroll-container'>

                    {doctor.map((d, index) => (
                        <ChildDoctor key={d.id || index} doctor={d} />
                    ))}


                </div>



            </section>
        </>
    )
}

export default Doctor
