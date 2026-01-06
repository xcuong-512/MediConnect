import React, { useState } from 'react'
import "./Profile.css"
function Profile() {
    const [firtname, setFirtName] = useState('Mehrab');
    const [lastname, setLastName] = useState('Lubabu');
    const [address, setAddress] = useState('33062 Chicago America');
    const [isEditing, setIsEditing] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();




    }
    return (
        <>
            <div className='Profile_main'>

                <div className='profile_pain'>
                    <div className='dady-profile'>
                        <img className='icon-profile' src="https://cdn2.fptshop.com.vn/small/avatar_trang_1_cd729c335b.jpg" alt="" />
                    </div>
                </div>


                <div className="form-container">

                    <div className="form-item">
                        <label htmlFor="FirstName">First Name</label>
                        <input className='inputner' type="text" id="FirstName" name="FirstName" value={firtname} disabled={!isEditing} onChange={(e) => setFirtName(e.target.value)} />
                    </div>


                    <div className="form-item">
                        <label htmlFor="LastName">Last Name</label>
                        <input className='inputner' type="text" id="LastName" name="LastName" value={lastname} disabled={!isEditing} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                </div>





                <div className='form-emailner'>

                    <div className='form_email-container'>
                        <label htmlFor="Email">Email</label>
                        <input className='email-intext' type="text" id="Email" name="Email" value="Labubu@gmail.com" readOnly />
                    </div>



                </div>

                <div className='form-number_phone'>

                    <div className='form_phone-container'>
                        <label htmlFor="PhoneNumber">Contact Number</label>
                        <input className='phone-intext' type="text" id="PhoneNumber" name="PhoneNumber" value="0967854321" readOnly />
                    </div>

                </div>



                <div className='form-number_phone'>

                    <div className='form_phone-container'>
                        <label htmlFor="PhoneNumber">Address</label>
                        <input className='phone-intext' type="text" id="Address" name="Address" value={address} disabled={!isEditing} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                </div>


                <div className="form-container">

                    <div className="form-item">
                        <label htmlFor="FirstName">City</label>
                        <select className='select-custom' id="City" name="City">
                            <option value="america">Hanoi</option>
                            <option value="vietnam">HOChiMinh</option>
                            <option value="japan">DaNang</option>
                            <option value="korea">QuangNinh</option>
                        </select>
                    </div>


                    <div className="form-item">
                        <label htmlFor="LastName">State</label>
                        <select className='select-custom' id="State" name="State">
                            <option value="america">MienBac</option>
                            <option value="vietnam">MienTrung</option>
                            <option value="japan">MienNam</option>
                            <option value="korea">QuangNinh</option>
                        </select>
                    </div>

                </div>

                <div className='submit-profile'>
                    <button onClick={handleSubmit} className='submit_save'>Save</button>
                </div>



            </div>
        </>
    )
}

export default Profile
