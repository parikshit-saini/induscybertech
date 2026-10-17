import { NavLink } from "react-router-dom";
import Logo from "../../../assets/ICT_logo.svg";
import { useState } from "react";

export const Footer = () => {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setIsSubmitted(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObjNl = new FormData();
        formDataObjNl.append('email', formData.email);

        try {
            const response = await fetch('https://induscybertech.com/newsletter.php', {
                method: 'POST',
                body: formDataObjNl,
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ email: '' });
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error occurred while sending email');
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // This will add a smooth scroll animation
        });
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 text-center text-sm-start">
                        <NavLink to="/" onClick={scrollToTop}>
                            <img src={Logo} alt="" className="img-fluid mb-3" />
                        </NavLink>
                        <p>At Indus Cyber Tech, we provide expert IT staff augmentation and project development services to help businesses succeed. Our professionals integrate smoothly with your team to ensure timely, cost-effective project delivery—whether for short-term needs or long-term solutions.</p>
                    </div>
                    <div className="col-xl-2 col-md-3 col-sm-6 text-center text-sm-start my-4 my-xl-0">
                        <h4 className="mb-3">Pages</h4>
                        <ul>
                            <li><NavLink to="about" onClick={scrollToTop}>About</NavLink></li>
                            <li><NavLink to="IT-solutions" onClick={scrollToTop}>IT Solutions</NavLink></li>
                            <li><NavLink to="Project-Development" onClick={scrollToTop}>Project Development</NavLink></li>
                            <li><NavLink to="Cloud-Solutions" onClick={scrollToTop}>Cloud Solutions</NavLink></li>
                            <li><NavLink to="Cybersecurity" onClick={scrollToTop}>Cybersecurity</NavLink></li>
                            {/* <li><NavLink to="./portfolio.html" onClick={scrollToTop}>Portfolio</NavLink></li> */}
                            <li><NavLink to="Contact-us" onClick={scrollToTop}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-5 col-sm-6 text-center text-sm-start my-4 my-xl-0">
                        <h4 className="mb-3">Contact Info</h4>
                        <ul>
                            <li>
                                <div className="contact">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                    <span>+91 12553565485</span>
                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <i className="fa-solid fa-envelope"></i>
                                    <a href="mailto:business@induscybertech.com">business@induscybertech.com</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact address">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-md-4 my-4 my-xl-0">
                        <div className="content">
                            <h4>Stay Updated!</h4>
                            <p>Subscribe to our newsletter for the latest updates and offers.</p>
                            <form method="POST" onSubmit={handleSubmit}>
                                <input type="email" className="form-control" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleChange} required />
                                <button name="submit" className="btn btn-light" type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                {isSubmitted && <p className="text-theme mt-2">Email Received Successfully! <br /> Thank You</p>}
                            </form>
                            <div className="social">
                                <a href="" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                <a href="" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                                <a href="" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                                <a href="" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container px-0">
                    <p className="my-0">Copyright © 2024 Indus Cyber Tech</p>
                    <div>
                        <NavLink to="Terms-and-conditions" onClick={scrollToTop}>Terms and Conditions</NavLink> |
                        <NavLink to="Privacy-Policy" onClick={scrollToTop}>Privacy Policy</NavLink> |
                        <NavLink to="Disclaimer" onClick={scrollToTop}>Disclaimer</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};
