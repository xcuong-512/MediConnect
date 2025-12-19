import './Contact.css'
function Contact() {
    return (
        <>
            <div className='contact-container'>

                <h2></h2>

                <form className='main-form' action="">
                    <div className='form-group'>
                        <label>Họ và Tên</label>
                        <input type="text" placeholder="Nhập tên của bạn..."></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Nhập email' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="Care">Bạn quan tâm đến dịch vụ nào?</label>
                        <select name="Care" id="Care">
                            <option value="Tổng quát">Khám tổng quát</option>
                            <option value="Xương khớp">Khám xương khớp</option>
                            <option value="Mắt">Khám mắt</option>
                            <option value="Tim mạch">Khám tim mạch</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Lời nhắn</label>
                        <textarea rows="5" placeholder="Bạn cần giúp gì?"></textarea>
                    </div>

                    <div className='form-button'>
                        <button type="submit" className='btn-submit'>Gửi yêu cầu</button>
                    </div>

                </form>

            </div>
        </>
    )
}
export default Contact;