import React from 'react'
import { Link } from 'react-router-dom';
import './ChildSelect.css'
function ChildSelect({ item }) {
    return (

        <>
            <div>


                <nav className="breadcrumb-container">
                    <div className="breadcrumb-content">
                        <Link to="/" className="breadcrumb-home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="#45c3d2">
                                <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8z"></path>
                            </svg>
                        </Link>

                        <div className="breadcrumb-path">
                            <span className="separator">/</span>
                            <span className='current-page'>Specialist Examination</span>
                            <span className="separator">/</span>
                            <span className="current-page">
                                {item.specialty_name}
                            </span>
                        </div>
                    </div>
                </nav>

                <div className="doctor-featured-wrapper">
                    <h2 className="doctor-featured-heading">
                        {item.specialty_name}
                    </h2>
                </div>






                <div className='filter-container'>
                    <div class="select-wrapper">
                        <select class="custom-select">
                            <option value="hanoi">HaNoi</option>
                            <option value="hcm">HoChiMinh</option>
                            <option value="danang">DaNang</option>
                        </select>
                    </div>


                </div>







            </div>


        </>
    )
}

export default ChildSelect;
