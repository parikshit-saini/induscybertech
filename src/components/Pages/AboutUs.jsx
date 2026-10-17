import about from "../../assets/abouUs.svg";
import mission from "../../assets/mission.svg";
import vision from "../../assets/vision.svg";
import { Process } from "../Common/Process/Process";
import { Review } from "../Common/Review/Review";
export const AboutUs = () => {
    return <div className="website">
        <section className="page-head">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>About Us</h1>
                        <p className="pageSubTitle">Your Trusted Partner in IT Solutions and Staffing</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="description">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Innovative IT Solutions,
                            Tailored for Your Success</h1>
                        <p>At Indus Cyber Tech, we are dedicated to empowering businesses through innovative IT staff augmentation and comprehensive project development services. With years of experience in the industry, we’ve built a reputation for providing highly skilled professionals and delivering cutting-edge solutions tailored to meet the evolving needs of our clients. Our approach combines technical expertise with a deep understanding of business objectives, ensuring that our clients achieve success in today’s fast-paced digital world.</p>

                        <p>   Whether you need specialized IT talent to augment your existing team or end-to-end development solutions, we are here to support your goals and drive measurable results. We pride ourselves on building long-term partnerships based on trust, transparency, and a commitment to excellence.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={about} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
        <section className="mission">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>Our Mission & Vision</h1>
                        <p>We see technology as more than a tool. it's a catalyst for transformation and growth.</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="content">
                            <h1>Mission</h1>
                            <p className="support">Empowering businesses with innovative IT solutions and exceptional talent.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Our mission is to provide businesses with the right talent and technology to accelerate growth, streamline operations, and overcome IT challenges. We are committed to delivering high-quality, scalable solutions that align with our clients' specific needs, ensuring long-term success and a competitive edge in the marketplace.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={mission} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content">
                            <h1>Vision</h1>
                            <p className="support">To be the leading provider of IT staff augmentation and development solutions, recognized for our expertise, innovation, and unwavering commitment to client success.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Our vision is to be the trusted partner that businesses turn to for all their IT staffing and project development needs. We aim to set the industry standard for quality and reliability, helping businesses navigate the complexities of digital transformation and achieve their full potential with confidence.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={vision} alt="" className="w-100" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Process />

        <Review />
    </div>

}