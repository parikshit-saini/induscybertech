
import { Form } from "../Common/Form/Form";
import contact from "../../assets/Contact_us_now.svg";

export const Contactus = () => {
    return <div className="website">
        <section className="page-head">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Contact Us</h1>
                        <p className="pageSubTitle">We’re here to help you</p>
                    </div>
                </div>
            </div>
        </section>
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

        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>How Can We Assist You?</h1>
                        <p>We’re here to help you with any questions, inquiries, or support you may need. Whether you're looking for expert advice, have a project in mind, or just want to learn more about our services, feel free to reach out!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <h3> General Inquiries</h3>
                            <p>Have questions about our services or need more information? We’re happy to provide all the details you need.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-file-shield"></i>
                            <h3> Project Consultations</h3>
                            <p>Want to discuss your upcoming project? Our experts are ready to help you bring your vision to life.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-server"></i>
                            <h3>Support</h3>
                            <p>Already a client and need assistance with an ongoing project? Get in touch with our support team for prompt solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="callToaction">
            <div className="container cta_box">
                <div className="row py-5">
                    <div className="col-md-6 centerMid">
                        <div className="text-md-start text-center">
                            <h1>Get In Touch</h1>
                            <p>We’re just a call, email, or message away.</p>

                        </div>
                    </div>
                    <div className="col-md-6 centerMid">
                        <div>
                            <ul>
                                <li><i class="fa-solid fa-phone"></i><span>Phone:</span> 9898989898</li>
                                <li><i class="fa-solid fa-envelope"></i><span>Email:</span> business@infuscybertech.com</li>
                                <li><i class="fa-solid fa-location-dot"></i><span>Address:</span> 9898989898</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}