import cloud from "../../../assets//cloudService.svg"
import { Form } from "../../Common/Form/Form";
import contact from "../../../assets/contactUs.svg";

export const Cloudsolutions = () => {
    return <div className="website">
        <section className="page-head">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Cloud Solutions</h1>
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
                            <h1>Cloud Solutions</h1>
                            <p>Our Cloud Solutions service helps businesses migrate to the cloud or optimize their current cloud infrastructure. We provide reliable, scalable, and secure cloud services to meet your business demands.</p>
                        </div>
                    </div>
                    <div className="col-md-6 centerMid">
                        <img src={cloud} alt="" className="w-75" />
                    </div>
                </div>
            </div>
        </section>
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>Key Features</h1>
                        <p>Streamline your operations with secure, scalable, and efficient cloud solutions designed to meet your business demands.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <h3> Scalable cloud infrastructure</h3>
                            <p>Our solutions allow your business to scale effortlessly, adapting to growing data and workload demands.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-file-shield"></i>
                            <h3> Secure data management</h3>
                            <p>Protect your sensitive information with robust security protocols that ensure data integrity and privacy.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-server"></i>
                            <h3>Seamless cloud migration</h3>
                            <p>Transition your business operations to the cloud with minimal disruption and zero data loss.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                            <h3> Reduced operational costs</h3>
                            <p>Lower your IT infrastructure costs by moving to a cloud-based system, reducing maintenance and hardware expenses.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-clock-rotate-left"></i>
                            <h3> 24/7 monitoring and support</h3>
                            <p>Our team provides constant monitoring and proactive support to ensure uninterrupted business operations.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-cloud-arrow-down"></i>
                            <h3> Multi-Cloud Strategy</h3>
                            <p>Leverage a multi-cloud approach to enhance flexibility and reduce risk, enabling your business to operate across multiple cloud environments seamlessly.</p>
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
                        <p>A growing enterprise wants to migrate its on-premise infrastructure to the cloud to reduce costs and enhance scalability. Our cloud services ensure a smooth migration, ensuring minimal downtime and improved performance.</p>
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