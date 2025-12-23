import React from 'react'
import "./Handbook.css"
import handle from "../Common/data/Hand.json"
import HandleChild from './HandleChild'
import Healthy from './Healthy'
function Handbook() {
    return (
        <>
            <div className='main-handbook'>
                <div className='medical-title'>
                    <h4 className='high-4'>Cẩm nang</h4>
                    <a href="/" className="btn-xem-them">
                        <span>Xem thêm</span>
                    </a>
                </div>
                <div className='specialty-scroll-wrapper'>
                    <div className='specialty-list-container'>
                        {handle.map((h, index) => (
                            <HandleChild key={h.id || index} hand={h} />
                        ))}
                    </div>
                </div>
            </div>

            <Healthy />
        </>
    )
}

export default Handbook
