import main from "../../assets/main.svg";
import whyChooseUs from "../../assets/whyChooseUs.svg";
import contact from "../../assets/contactUs.svg";
import { Form } from "../Common/Form/Form";
import { Review } from "../Common/Review/Review";
import { Process } from "../Common/Process/Process";



export const Main = () => {
    return <div className="website">
        <section className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 centerMid">
                        <div className="content">
                            <p className="support">Empowering Your IT Vision with Expert Talent.</p>
                            <h1>Innovative IT Staff Augmentation & Development Solutions</h1>
                            <p>At Indus Cyber Tech, we provide expert IT staff augmentation and project development services to help businesses succeed. Our professionals integrate smoothly with your team to ensure timely, cost-effective project delivery—whether for short-term needs or long-term solutions.</p>
                            <div className="btn btn-theme">Lets Talk <i className="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={main} alt="" className="mw-100" />
                    </div>
                </div>
            </div>
        </section>

        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>About Indus Cyber Tech</h1>
                        <p>Indus Cyber Tech is your trusted partner in IT staffing and project development. With years of experience, we provide tailored solutions designed to meet your unique business needs. Our goal is to empower your business with the right talent and innovative technology, helping you stay ahead in today’s competitive market.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>Our Services</h1>
                        <p>Discover how Indus Cyber Tech can elevate your business through expert IT services that are customized to fit your specific needs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-user-tie"></i>
                            <h3> IT Staff Augmentation</h3>
                            <p>Flexible IT staffing solutions to enhance your team’s capacity and capabilities. We offer both short-term and long-term support, providing skilled professionals who seamlessly integrate into your projects.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-laptop-code"></i>
                            <h3>End-to-End Project Development</h3>
                            <p>From initial concept to final deployment, we handle every aspect of your IT project. Our comprehensive development process ensures a robust, scalable solution aligned with your business goals.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-user-shield"></i>
                            <h3>Cyber security Solutions</h3>
                            <p>Protect your business from evolving cyber threats with our advanced cyber security services. We offer risk assessments, penetration testing, and ongoing monitoring to safeguard your digital assets.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-handshake"></i>
                            <h3>IT Recruitment</h3>
                            <p>Finding the right talent can be a challenge. Our expert recruitment services connect you with highly skilled IT professionals, ensuring the best fit for your team and projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="whychoose">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>Why Choose Us</h1>
                        <p>We stand out in the IT industry by offering more than just talent. We provide solutions that deliver measurable results and lasting partnerships.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="content">
                            <div>
                                <h3>1. Expertise You Can Trust</h3>
                                <p>With a team of highly skilled professionals, we bring deep technical knowledge and hands-on experience to every project.</p>
                            </div>
                            <div>
                                <h3>2. Customized Solutions</h3>
                                <p>We understand that each business is unique, which is why we tailor our services to meet your specific needs and objectives.</p>
                            </div>
                            <div>
                                <h3>3. Seamless Integration</h3>
                                <p>Our professionals work as an extension of your team, ensuring smooth collaboration and project execution.</p>
                            </div>
                            <div>
                                <h3>4. Commitment to Excellence</h3>
                                <p>We are dedicated to delivering high-quality solutions that drive success and ensure client satisfaction every step of the way.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 centerMid">
                        <img src={whyChooseUs} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </section>

        <Process />

        <Review />

        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 centerMid">
                        <img src={contact} alt="" className="w-100" />
                    </div>
                    <div className="col-md-6">

                        <Form />
                    </div>
                </div>
            </div>
        </section>
    </div>
}