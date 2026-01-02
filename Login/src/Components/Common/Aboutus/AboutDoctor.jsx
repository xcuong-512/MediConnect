import React, { useEffect, useState } from 'react'
import "./AboutDoctor.css";
function AboutDoctor() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/doctor")
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
    }, [])
    return (
        <>
            <section className='about_doctor'>
                <h2 className='some-high'>Some Doctor on BookingCare</h2>
                <div className='main-about_grid'>
                    {data.map((item) => (
                        <div className='doctor-card' key={item.id}>
                            <div className="image-holder">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div class="doctor-info">
                                <h3>{item.position} , {item.name}</h3>
                                <span class="specialty">{item.specialty}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default AboutDoctor
