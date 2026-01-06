import React from 'react'
import "./Social.css"
function Social() {
    return (
        <>
            <div className='main-social'>
                <section className='spirit-section'>
                    <h1 className='social-h1'>What the Media Says About MediConnect</h1>

                    <div className='media-container'>
                        <div className='video-wrapper'>
                            <div class="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/FyDQljKtWnI"
                                    title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div className='logo-grid'>
                            <div className="logo-wrapper">
                                <a href="https://vnexpress.net/..." target="_blank" className="logo-item">
                                    <img src="https://bookingcare.vn/assets/truyenthong/vnexpress.png" alt="VnExpress" />
                                </a>
                            </div>

                            <div className="logo-wrapper">
                                <a href="https://vnexpress.net/..." target="_blank" className="logo-item">
                                    <img src="https://bookingcare.vn/assets/truyenthong/suckhoedoisong.png" alt="VnExpress" />
                                </a>
                            </div>

                            <div className="logo-wrapper">
                                <a href="https://vnexpress.net/..." target="_blank" className="logo-item">
                                    <img src="https://cdn.bookingcare.vn/fo/2024/10/22/142415-logo-vnnet.jpg" alt="VnExpress" />
                                </a>
                            </div>


                        </div>

                        <div className='logo-grid'>
                            <div className="logo-wrapper">
                                <a href="https://vnexpress.net/..." target="_blank" className="logo-item">
                                    <img src="https://bookingcare.vn/assets/truyenthong/vtv1.png" alt="VnExpress" />
                                </a>
                            </div>

                            <div className="logo-wrapper">
                                <a href="https://vnexpress.net/..." target="_blank" className="logo-item">
                                    <img src="https://cdn.bookingcare.vn/fo/2023/11/01/165432-vtcnewslogosvg.png" alt="VnExpress" />
                                </a>
                            </div>

                            <div className="logo-wrapper">
                                <a href="https://vnexpress.net/..." target="_blank" className="logo-item">
                                    <img src="https://cdn.bookingcare.vn/fo/2023/11/02/110757-dantrilogo.png" alt="VnExpress" />
                                </a>
                            </div>


                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Social
