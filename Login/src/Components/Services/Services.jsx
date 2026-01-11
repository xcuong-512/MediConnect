import React, { useEffect, useState } from 'react'
import './Services.css';
import { Link } from 'react-router-dom'
function Services() {
    const [data, setData] = useState(['']);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/spec`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data);
            })
    }, [])
    return (
        <>
            <div className='main-services'>
                <div className='services-title'>
                    Comprehensive Service
                </div>


                <div className='box-services-container'>

                    {data.map((items, index) => (


                        <Link className='card-link' to={`/select/${items.id}`}>
                            <div className='card-strong'>
                                <div className='services-img'>
                                    <img className='box-img' src={items.specialty_image} alt="" />
                                </div>
                                <div className='services-text'>
                                    <p className='text-line'>{items.specialty_name}</p>
                                </div>
                            </div>
                        </Link>





                    ))}

                </div>
            </div >
        </>
    )
}

export default Services
