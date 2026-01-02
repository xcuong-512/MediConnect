import React, { useEffect, useState } from 'react'
import "./Doctor.css";
import doctor from "../Common/data/doctor.json"
import ChildDoctor from "./ChildDoctor";
import { Link } from 'react-router-dom';
function Doctor() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/doctor')
            .then(response => response.json())
            .then(data => {

                setData(data);
            })
    }, [])

    return (
        <>
            <section className='doctor-section'>
                <div className='medical-title'>
                    <h4 className='high-4'>Featured Doctors</h4>
                    <Link to="/detail" class="btn-xem-them">
                        <span>View More</span>
                    </Link>
                </div>

                <div className='scroll-container'>

                    {data.map((d, index) => (
                        <ChildDoctor key={d.id || index} doctor={d} />
                    ))}


                </div>



            </section>
        </>
    )
}

export default Doctor
