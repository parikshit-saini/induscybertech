import project from "../../../assets/projectDevelopment.svg"
import { Form } from "../../Common/Form/Form";
import contact from "../../../assets/contactUs.svg";

export const Projectdevelopment = () => {
    return <div className="website">
        <section className="page-head">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Project Development</h1>
                        <p className="pageSubTitle">Service</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="description">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 centerMid">
                        <div >
                            <h1>Project Development</h1>
                            <p>Our Project Development service manages the entire lifecycle of your IT projects, from initial planning to successful delivery. We ensure your vision is translated into a functional, scalable solution that drives business value.</p>

                        </div>
                    </div>
                    <div className="col-md-6 centerMid">
                        <img src={project} alt="" className="w-50" />
                    </div>
                </div>
            </div>
        </section>
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>Key Features</h1>
                        <p>Turn your vision into reality with our end-to-end project development services, delivering custom solutions tailored to your business needs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-arrows-spin"></i>
                            <h3> Full project lifecycle management</h3>
                            <p>From planning to delivery, we manage every stage of the project to ensure a smooth and successful implementation.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-laptop-code"></i>
                            <h3> Custom software development</h3>
                            <p>We develop software solutions customized to your specific needs, enhancing efficiency and scalability.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-arrows-split-up-and-left"></i>
                            <h3>Agile methodology for quick iterations</h3>
                            <p>Our agile approach allows for flexible iterations, ensuring timely feedback and faster improvements.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-arrow-up-right-dots"></i>
                            <h3> Scalable solutions for business growth</h3>
                            <p>Our projects are designed to grow with your business, ensuring long-term value and sustainability.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-file-zipper"></i>
                            <h3> Focus on quality and timely delivery</h3>
                            <p>We prioritize high-quality output while adhering to deadlines, so you get results without compromise.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-user-gear"></i>
                            <h3> Ongoing Support and Maintenance</h3>
                            <p>Post-launch, we provide continuous support and updates to ensure your project stays optimized and relevant as your business evolves.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="usecase">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Use Case</h1>
                        <p>A company needs a custom e-commerce platform developed. We manage the project from concept to launch, ensuring the platform is user-friendly, secure, and scalable to handle future growth.</p>
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
    </div>
}