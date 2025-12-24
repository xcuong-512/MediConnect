import './SignIn.css'
import Layout from '../Layout'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email,
                password,
            },
                {
                    withCredentials: true
                });
            navigate("/dashboard");
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || "Đăng nhập thất bại");
            } else {
                setError("Có lỗi xảy ra");
            }
        }
    };
    return (
        <>

            <Layout>
                <div className='main-signin'>
                    <div className='card-signin'>
                        <form className='form-signin' onSubmit={handleSubmit}>
                            <p className='start-login'>BẮT ĐẦU KHÁM CHỮA BỆNH</p>
                            <h2 className='text-two'>
                                Đăng nhập vào <span className='text-prep'>Doctor.</span>
                            </h2>

                            <p className='form-subtitle'>
                                Bạn đã đăng ký chưa?
                                <Link to='/signup' className='link-login'>Đăng ký</Link>
                            </p>

                            <a href="http://localhost:8000/auth/google/redirect" className="btn-social-google">
                                <img
                                    src="https://www.google.com/favicon.ico"
                                    alt="Google Logo"
                                    className="icon-google-img"
                                    width="20"
                                    height="20"
                                />
                                <span className="font-medium">Đăng nhập với Google</span>
                            </a>

                            <div className="divider-container">
                                <div className="divider-line"></div>
                                <span className="divider-text">Hoặc</span>
                                <div className="divider-line"></div>
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <div className='form-email'>
                                <label className='form-label'>Email</label>
                                <div className='child-email'>
                                    <input
                                        className='form-input'
                                        type="email"
                                        name='email'
                                        placeholder='Nhập email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <FaEnvelope className='input-icon' />
                                </div>
                            </div>

                            <div className='form-email'>
                                <label className='form-label'>Mật khẩu</label>
                                <div className='child-email'>
                                    <input
                                        className='form-input'
                                        type="password"
                                        name='password'
                                        placeholder='Nhập mật khẩu'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <FaLock className='input-icon' />
                                </div>
                            </div>

                            <button type="submit" className="btn-register-submit">
                                <span>Đăng Nhập</span>
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>

        </>
    )
}
export default SignIn;
