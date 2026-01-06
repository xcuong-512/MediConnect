import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Complete.css"
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
function Complete() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='main-header'>

                <div className='main-logo'>
                    {/* <img src="./img/doctor.jpg" alt="drug-logo" className='img-logo' /> */}
                    <h3>MediConnect</h3>
                </div>

                <div className='main-nav'>
                    <ul>
                        <li ><Link className='menu-item' to="/">Home</Link></li>
                        <li><a className='menu-item' href="/">Services</a></li>
                        <li className='menu-item'><a href="/">Medical package</a></li>
                        <li className='menu-item'><Link to="/aboutus">About Us</Link></li>
                        <li className='menu-item'><a href="/">News</a></li>
                        <li className='menu-item'><Link to="/contact">Contact</Link></li>


                    </ul>
                </div>

                <div className='fashion-button'>
                    <img className='fashion-image' src="https://cdn2.fptshop.com.vn/small/avatar_trang_1_cd729c335b.jpg" alt="" onClick={() => setOpen(!open)} />

                    <div className={`sub-menu-wrap ${open ? 'show' : ''}`}>
                        <div className='sub-menu'>
                            <div className='user-infor'>
                                <img className='user-image' src="https://cdn2.fptshop.com.vn/small/avatar_trang_1_cd729c335b.jpg" alt="" />
                                <h4 className='user-textline'>Tank top master</h4>

                            </div>
                            <hr />
                            <div className='borner'>
                                <ul className="setting-icon">
                                    <li className="setting-item">
                                        <Link to="/profile" className="setting-link">
                                            <FaUser className="icon-setting" />
                                            <span>Profile</span>
                                        </Link>
                                    </li>

                                    <li className="setting-item">
                                        <FaPlusSquare className="icon-setting" />

                                        <span >Medical History</span>
                                    </li>

                                    <li className="setting-item">
                                        <FaCog className="icon-setting" />
                                        <span>Settings & Privacy</span>
                                    </li>

                                    <li className="setting-item logout">
                                        <FaSignOutAlt style={{ color: "red" }} className="icon-setting" />
                                        <span>Logout</span>
                                    </li>
                                </ul>

                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Complete
