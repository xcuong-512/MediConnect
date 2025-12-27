import React from 'react'
import Content from "../Common/data/content.json"
import ChildIdeal from './ChildIdeal'
function Ideal() {
    return (
        <>
            <div className='main-ideal'>
                <div className='main-handbook'>
                    <div className='medical-title'>
                        <h4 className='high-4'>Dành cho bác sĩ và cơ sở y tế</h4>
                        <a href="/" className="btn-xem-them">
                            <span>Bài viết</span>
                        </a>
                    </div>
                </div>

                <div className='specialty-scroll-wrapper'>
                    <div className='specialty-list-container'>
                        {Content.map((c, index) => (
                            <ChildIdeal key={c.id || index} content={c} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ideal
