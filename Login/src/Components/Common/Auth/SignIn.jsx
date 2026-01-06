import './SignIn.css';
import Layout from '../Layout';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import api from '../../../services/api';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
            }

            alert("Đăng nhập thành công!");
            navigate("/");
        } catch (err) {
            console.error("Login Error:", err);
            if (err.response && err.response.data) {
                setError(err.response.data.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại.");
            } else {
                setError("Có lỗi xảy ra, không thể kết nối đến server.");
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
                                Login <span className='text-prep'>MediConnect.app</span>
                            </h2>

                            <p className='form-subtitle'>
                                Bạn đã đăng ký chưa?
                                <Link to='/signup' className='link-login'>REGISTER</Link>
                            </p>

                            <a href="http://127.0.0.1:8000/auth/google/redirect" className="btn-social-google">
                                <img
                                    src="https://www.google.com/favicon.ico"
                                    alt="Google Logo"
                                    className="icon-google-img"
                                    width="20"
                                    height="20"
                                />
                                <span className="font-medium">Sign-up với Google</span>
                            </a>

                            <div className="divider-container">
                                <div className="divider-line"></div>
                                <span className="divider-text">Or</span>
                                <div className="divider-line"></div>
                            </div>

                            {error && <div className="error-message" style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</div>}

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
                                <label className='form-label'>Password</label>
                                <div className='child-email'>
                                    <input
                                        className='form-input'
                                        type="password"
                                        name='password'
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <FaLock className='input-icon' />
                                </div>
                            </div>

                            <button type="submit" className="btn-register-submit">
                                <span>Login</span>
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default SignIn;