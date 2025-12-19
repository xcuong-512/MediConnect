import './SignIn.css'
import Layout from '../Layout'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignIn() {
    return (
        <>

            <Layout>
                <div className='main-signin'>
                    <div className='card-signin'>

                        <div className='form-signin'>


                            <p className='start-login'>BẮT ĐẦU KHÁM CHỮA BỆNH</p>
                            <h2 className='text-two'>
                                Đăng nhập vào
                                <span className='text-prep'>Doctor.</span>
                            </h2>

                            <p className='form-subtitle'>
                                Bạn đã đăng ký chưa?
                                <Link to='/signup' className='link-login'>Đăng nhập</Link>
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

                            <div class="divider-container">
                                <div class="divider-line"></div>
                                <span class="divider-text">Hoặc</span>
                                <div class="divider-line"></div>
                            </div>

                            <div className='form-email'>
                                <label className='form-label' >Email</label>
                                <div className='child-email'>
                                    <input className='form-input' type="email" name='email' placeholder='Nhập email' />
                                    <FaEnvelope className='input-icon' />
                                </div>
                            </div>

                            <div className='form-email'>
                                <label className='form-label' >Mật khẩu</label>
                                <div className='child-email'>
                                    <input className='form-input' type="password" name='password' placeholder='Nhập mật khẩu' />
                                    <FaLock className='input-icon' />
                                </div>
                            </div>

                        </div>
                        <button type="submit" class="btn-register-submit">
                            <span>Đăng Nhập</span>
                        </button>

                    </div>
                </div>
            </Layout>

        </>
    )
}
export default SignIn;
