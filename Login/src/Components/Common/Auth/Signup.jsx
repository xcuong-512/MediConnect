import React, { useState } from 'react'
import Layout from '../Layout'
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";

function Signup() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== passwordConfirmation) {
            setError("Mật khẩu xác nhận không khớp");
            return;
        }

        try {
            await axios.post(
                "http://127.0.0.1:8000/api/register",
                {
                    full_name: fullname,
                    email: email,
                    password: password,
                    phone: "0123456789",
                    password_confirmation: passwordConfirmation,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            alert("Đăng ký thành công");
            navigate("/signin");
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || "Đăng ký thất bại");
            } else {
                setError("Không thể kết nối server");
            }
        }
    };

    return (
        <Layout>
            <div className='main-signup'>
                <div className='card-signup'>
                    <div className='register-form-column'>
                        <div className='alert-box-warning' role='alert '>
                            <span className="alert-font-medium">Chú ý:</span> Vui lòng nhập chính xác số điện thoại của bạn để nhận đầy đủ
                            quyền lợi và sử dụng toàn bộ tính năng của trang web.
                        </div>

                        <h2 className='form-title'>
                            Đăng ký <span className="form-title-highlight">miễn phí.</span>
                        </h2>
                        <p className='form-subtitle'>
                            Bạn đã có tài khoản chưa ?
                            <Link to='/signin' className='link-login'>Đăng nhập</Link>
                        </p>

                        <a href="http://localhost:8000/auth/google/redirect" className="btn-social-google">
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

                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label className="form-label">Họ và tên</label>
                                <div className='input-icon-wrapper'>
                                    <input type="text" className='form-input' placeholder='Họ và tên' name='name' id='user-name' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                    <FaUser className='input-icon' />

                                </div>

                                <div className='form-group mt-2'>
                                    <label className='form-label'>Email</label>
                                    <div className='input-icon-wrapper'>
                                        <input type="email" className='form-input' placeholder='Nhập email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <FaEnvelope className='input-icon' />

                                    </div>
                                </div>

                                <div className='form-group mt-2'>
                                    <label className='form-label'>Mật khẩu</label>
                                    <div className='input-icon-wrapper'>
                                        <input type="password" className='form-input' placeholder='Nhập mật khẩu' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <FaLock className='input-icon' />


                                    </div>
                                </div>

                                <div className='form-group mt-2'>
                                    <label className='form-label'>Xác nhận mật khẩu</label>
                                    <div className='input-icon-wrapper'>
                                        <input type="password" className='form-input' placeholder='Xác nhận mật khẩu' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
                                        <FaLock className='input-icon' />


                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn-register-submit">
                                <span>ĐĂNG KÝ</span>
                            </button>
                        </form>
                    </div>

                    <div className='register-image-column'>
                        <img src="/img/spiringdoc.jpg" alt="Illustration" className="image-illustration" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup;