import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill in all required fields");
            return;
        }

       
        // await axios.post("http://localhost:8000/api/contact", formData);

        console.log("Submitted data:", formData);
        alert("Your request has been sent successfully. We will contact you soon.");
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <div className="contact-header">
                    <h2>Contact & Medical Consultation</h2>
                    <p>
                        Please leave your information. Our doctors and consultants
                        will contact you as soon as possible.
                    </p>
                </div>

                <form className="main-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+84 xxx xxx xxx"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Service of Interest</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value="">-- Select a service --</option>
                            <option value="general">General Check-up</option>
                            <option value="cardio">Cardiology</option>
                            <option value="orthopedic">Orthopedics</option>
                            <option value="eye">Ophthalmology</option>
                            <option value="ent">ENT (Ear, Nose, Throat)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Describe your condition or consultation request..."
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-button">
                        <button type="submit" className="btn-submit">
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
