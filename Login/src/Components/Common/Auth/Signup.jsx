import React from 'react'
import Layout from '../Layout'
import './Signup.css'
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Signup() {
    return (
        <>
            <Layout>
                <div className='main-signup'>
                    <div className='card-signup'>
                        <div className='register-form-column'>
                            <div className='alert-box-warning' role='alert '>
                                <span className="alert-font-medium">Chú ý:</span> Vui lòng nhập chính xác số điện thoại của bạn để nhận đầy đủ
                                quyền lợi và sử dụng toàn bộ tính năng của trang web.
                            </div>

                            <h2 className='form-title'>
                                Đăng ký
                                <span className="form-title-highlight">miễn phí.</span>
                            </h2>
                            <p className='form-subtitle'>
                                Bạn đã có tài khoản chưa ?
                                <Link to='/signin' className='link-login'>Đăng nhập</Link>
                            </p>

                            <a href="https://www.benhvien108.vn/home.htm" className="btn-social-google">
                                <img
                                    src="https://www.google.com/favicon.ico"
                                    alt="Google Logo"
                                    className="icon-google-img"
                                    width="20"
                                    height="20"
                                />
                                <span className="font-medium">Đăng ký với Google</span>
                            </a>

                            <div className='form-driver'>
                                <div className='divider-line'> </div>
                                <span className='divider-text'>Hoặc</span>
                                <div className="divider-line"></div>
                            </div>

                            <form action="">
                                <div className='form-group'>
                                    <label className="form-label">Họ và tên</label>
                                    <div className='input-icon-wrapper'>
                                        <input type="text" className='form-input' placeholder='Họ và tên' name='name' id='user-name' />
                                        <FaUser className='input-icon' />

                                    </div>

                                    <div className='form-group mt-2'>
                                        <label className='form-label'>Email</label>
                                        <div className='input-icon-wrapper'>
                                            <input type="email" className='form-input' placeholder='Nhập email' name='email' id='email' />
                                            <FaEnvelope className='input-icon' />

                                        </div>
                                    </div>

                                    <div className='form-group mt-2'>
                                        <label className='form-label'>Mật khẩu</label>
                                        <div className='input-icon-wrapper'>
                                            <input type="password" className='form-input' placeholder='Nhập mật khẩu' name='password' id='password' />
                                            <FaLock className='input-icon' />


                                        </div>
                                    </div>

                                    <div className='form-group mt-2'>
                                        <label className='form-label'>Xác nhận mật khẩu</label>
                                        <div className='input-icon-wrapper'>
                                            <input type="password" className='form-input' placeholder='Xác nhận mật khẩu' name='password_confirmation' id='password_confirmation' />
                                            <FaLock className='input-icon' />


                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn-register-submit">
                                    <span>ĐĂNG KÝ</span>
                                </button>


                            </form>



                        </div>

                        <div className='register-image-column'>
                            <img src="../../../../public/img/spiringdoc.jpg" width="0" height="0" loading="lazy" alt="Illustration" class="image-illustration"></img>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Signup
