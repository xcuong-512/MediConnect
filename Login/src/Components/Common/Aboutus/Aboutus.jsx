import React, { useEffect, useState } from 'react'
import "./Aboutus.css"
import { Link } from 'react-router-dom';
import ChildAboutus from './ChildAboutus';
import AboutDoctor from './AboutDoctor';
function Aboutus() {
    const [data, setData] = useState([]);
    useEffect(() => {

        fetch('http://127.0.0.1:8000/api/services')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.error("There was an error fetching the products!", error);
            });

    }, [])
    return (
        <>
            <section id='about_intro' className='about-block'>
                <div className='container'>
                    <div class="logo-wrapper">
                        <img id="about_logo" src="https://bookingcare.vn/assets/anh/bookingcare-logo-v3-w200.png" alt="BookingCare Logo" />
                    </div>
                    <div className='content-row'>
                        <div className='content-text'>
                            <h1>BookingCare</h1>
                            <h2>A platform connecting a network of top-tier specialists.</h2>
                            <p>Helping patients easily find the right doctor for the right diagnosis...</p>
                        </div>
                        <div className='content-image'>
                            <img class="about_demo" src="https://bookingcare.vn/assets/anh/bookingcare-responsive-2020.png" alt="Demo"></img>
                        </div>
                    </div>

                    <div class="link-wrapper">
                        <Link to="/" target="_blank" class="btn-visit">
                            Visit BookingCare website <br></br>
                            <i class="glyphicon glyphicon-new-window"></i>
                        </Link>


                    </div>


                </div>
            </section>

            <section id='about_prolem' className='about-text'>
                <div className='vung-bao'>
                    <h2 className='title'>Are you or a loved one....</h2>

                    <div className='hang'>
                        <div className='cot-2'>
                            <div className='about-problem-item'>
                                <p>Having health concerns but unsure where to go or which doctor is right for you?</p>
                            </div>
                        </div>
                        <div class="cot-2">
                            <div class="about-problem-item">
                                <p>Have you seen multiple doctors at different clinics, yet your condition hasn't improved?</p>
                            </div>
                        </div>

                        <div class="cot-2">
                            <div class="about-problem-item">
                                <p>Unsure about a doctor's expertise or their clinical experience?</p>
                            </div>
                        </div>

                        <div class="cot-2">
                            <div class="about-problem-item">
                                <p> Is the information about the doctor's training and work experience accurate?</p>
                            </div>
                        </div>


                        <div class="cot-2">
                            <div class="about-problem-item">
                                <p>Will the doctor's schedule and location fit into my plan?</p>
                            </div>
                        </div>

                        <div class="cot-2">
                            <div class="about-problem-item">
                                <p> Are the medical facilities fully equipped? What are the specific costs for consultations, imaging, and lab tests?</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div className='why-container'>
                <h2 className='title'>Why does BookingCare solve your problems?</h2>
                <div className='why-grid'>
                    {data.map((a, index) => (
                        <ChildAboutus key={a.id || index} about={a} />
                    ))}
                </div>
            </div>

            <section class="bookingcare-about">
                <div class="container">
                    <div class="row">
                        <div class="column video-column">
                            <div class="video-main">
                                <iframe
                                    src="https://www.youtube.com/embed/7tiR7SI4CkI?rel=0&controls=0&showinfo=0"
                                    frameborder="0"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="column content-column">
                            <h2>How does BookingCare work?</h2>
                            <p class="intro">
                                BookingCare is a scheduling platform that helps patients easily select the right doctor from a network of highly skilled specialists, with verified information and fast booking.
                            </p>
                            <ul class="steps-list">
                                <li>
                                    <strong>1. Verified Information:</strong> Our team works directly with doctors to authenticate accurate, clear, and updated information regarding their specialties, training, and experience.
                                </li>
                                <li>
                                    <strong>2. Guiding Content:</strong> We provide detailed guides to help patients choose the right doctor for their specific health issues to ensure effective treatment.
                                </li>
                                <li>
                                    <strong>3. Smart Matching:</strong> The system suggests a list of suitable doctors based on signs, symptoms, or the specific reason for the visit.
                                </li>
                                <li>
                                    <strong>4. Patient Feedback:</strong> We update reviews from patients who have visited each doctor, providing additional reference points for your choice.
                                </li>
                            </ul>
                            <div class="ai-tag">
                                <p>Advanced AI technology supports medical service suggestions, providing a fast, easy, and personalized experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bookingcare-benefits">
                <div class="container">
                    <h2>Benefits of Booking through BookingCare</h2>

                    <div class="table-responsive">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>Criteria</th>
                                    <th>Via BookingCare</th>
                                    <th>Directly at Hospital</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="criteria-label">Doctors</td>
                                    <td>Wide selection of specialized doctors</td>
                                    <td>Limited number of doctors available</td>
                                </tr>
                                <tr>
                                    <td class="criteria-label">Examination</td>
                                    <td>See the exact doctor you selected</td>
                                    <td>Unable to choose a specific doctor</td>
                                </tr>
                                <tr>
                                    <td class="criteria-label">Patient Rights</td>
                                    <td>Support before, during, and after the visit</td>
                                    <td>Depends on the individual unit</td>
                                </tr>
                                <tr>
                                    <td class="criteria-label">Booking</td>
                                    <td>Anytime, anywhere (24/7)</td>
                                    <td>During office hours only</td>
                                </tr>
                                <tr>
                                    <td class="criteria-label">Pricing & Services</td>
                                    <td>Clear, detailed, and transparent updates</td>
                                    <td>Often unclear or hard to track</td>
                                </tr>
                                <tr>
                                    <td class="criteria-label">Waiting Time</td>
                                    <td>Minimized waiting periods</td>
                                    <td>Based on arrival sequence</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <AboutDoctor />

            <div className='main-hard'>
                <h2 className='someone-text'>Some current challenges</h2>
                <div className='continue-text'>
                    <div class="difficulty-item">
                        <h4>1. Waiting Times in Certain Cases</h4>
                        <p>
                            Due to the specific nature of medical examinations and treatments, patients may not always be seen at their exact scheduled appointment time. While some appointments proceed on schedule, there is generally a margin of error regarding the designated time slot, particularly with highly sought-after doctors who have a high volume of patients.
                        </p>
                        <p>
                            However, BookingCare works closely with doctors and medical facilities to minimize wait times, ensuring that those who book in advance experience significantly shorter waits compared to walk-in patients.
                        </p>
                    </div>

                    <div class="difficulty-item">
                        <h4>2. Doctor and Healthcare Network in Hanoi and Ho Chi Minh City</h4>
                        <p>
                            BookingCare is committed to providing services throughout Vietnam. Currently, however, our network of doctors and medical facilities is primarily concentrated in Hanoi and Ho Chi Minh City.
                        </p>
                        <p>
                            As a result, patients living far from these major hubs may face challenges in accessing high-quality healthcare services. We are dedicated to supporting these patients—especially those from remote provinces—in arranging and scheduling their medical visits effectively.
                        </p>
                        <p>
                            The BookingCare team is actively working to expand our service coverage nationwide, making it easier for patients everywhere to choose the right doctor and access the care they need.
                        </p>
                    </div>

                    <div class="difficulty-item">
                        <h4>3. Other Operational Challenges</h4>
                        <p>
                            While information about doctors, clinics, and hospitals on BookingCare is accurately verified, it is often copied by other websites, leading to distorted and outdated data.
                        </p>
                        <p>
                            Health Handbook content has also been copied, causing misunderstandings for patients, even though BookingCare always develops its content based on scientific evidence and clear principles.
                        </p>
                        <p>
                            In addition, supporting appointment scheduling at public healthcare facilities remains challenging, and BookingCare is gradually working to improve this issue.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aboutus
