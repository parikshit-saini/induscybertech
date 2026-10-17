import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('email', formData.email);
        formDataObj.append('subject', formData.subject);
        formDataObj.append('message', formData.message);

        try {
            const response = await fetch('https://induscybertech.com/form.php', {
                method: 'POST',
                body: formDataObj,
            });

            if (response.ok) {
                navigate('/Thankyou');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error occurred while sending email');
        }
    };


    return <section className="form">
        <h3>Contact us now to discover how we can help your business thrive!</h3>
        <form method="POST" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="inputField">
                        <label htmlFor="">Email</label>
                        <input type="Email" className="form-control" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="inputField">
                        <label htmlFor="">Subject</label>
                        <input type="text" className="form-control" placeholder="Enter Your Subject" name="subject" value={formData.subject} onChange={handleChange} required />

                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="inputField">
                        <label htmlFor="">Message</label>
                        <textarea id="" name="message" className="form-control" rows="4"
                            placeholder="Enter Your Message" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="col-12 mt-4 text-center">
                    <button name="submit" className="btn btn-theme" type="submit">Send <i class="fa-solid fa-paper-plane ms-1"></i></button>
                </div>
            </div>
        </form>
    </section>
}