import React, { useState } from 'react'
import "./Profile.css"
import Layout from '../Layout'
import Avatar from '../Avatar'
function Profile() {

    return (
        <Avatar>

            <div className='main-grid'>
                <div className='user_sidebar'>
                    <div className='avatar_container'>
                        <img className='avartar' src="https://cdn2.fptshop.com.vn/small/avatar_trang_1_cd729c335b.jpg" alt="" />
                    </div>

                    <div className='container-infor'>
                        <h2 className='username'>@java4866367570</h2>

                        <button className='user-button'>Edit profile</button>
                        <p>Joined Jan 7, 2026</p>
                    </div>


                </div>
                <div className='user_information'>
                    <div className='infor_patient'>
                        <div className='image_container'>
                            <img className='nice_avartar' src="https://cdn2.fptshop.com.vn/small/avatar_trang_1_cd729c335b.jpg" alt="" />
                        </div>

                        <div className='submit_form'>
                            <div className='name-container'>
                                <div className='submit_firstname'>
                                    <label htmlFor="FirstName">FirtName</label> <br></br>
                                    <input className='submit_name' type="text" name='FirstName' value={'Metharad'} />
                                </div>
                                <div className="submit_lastname">
                                    <label htmlFor="LastName">LastName</label> <br></br>
                                    <input className='submit_name' type="text" name='LastName' value={'Lukachim '} />
                                </div>
                            </div>

                            <div className='contact'>
                                <div className='submit_email'>
                                    <label htmlFor="Email">Email</label> <br></br>
                                    <input className='email_address' type="email" name='Email' value={'Quaivat@gmail.com'} />
                                </div>

                                <div className='submit_email'>
                                    <label htmlFor="Address">Address</label> <br></br>
                                    <input className='email_address' type="text" name='Address' value={'112 Hoang Quoc Viet'} />
                                </div>


                                <div className='submit_email'>
                                    <label htmlFor="Number">Contact Number</label> <br></br>
                                    <input className='email_address' type="text" name='Number' value={'09876544335'} />
                                </div>



                                <div className='name-container'>
                                    <div className='submit_firstname'>
                                        <label htmlFor="FirstName">City</label> <br></br>
                                        <input className='submit_name' type="text" name='FirstName' value={'Hanoi'} />
                                    </div>
                                    <div className="submit_lastname">
                                        <label htmlFor="LastName">District</label> <br></br>
                                        <input className='submit_name' type="text" name='LastName' value={'HoanKiem'} />
                                    </div>
                                </div>



                            </div>


                            <div className='button-container'>
                                <button type="reset" className='btn reset'>Reset</button>
                                <button type="submit" className='btn save'>Save</button>
                            </div>













                        </div>

                    </div>
                    <div className='medical-history'>

                    </div>
                </div>
            </div>


        </Avatar >
    )
}

export default Profile
