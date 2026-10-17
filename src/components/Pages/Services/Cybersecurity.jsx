import cyber from "../../../assets//cybersecurity.svg"
import { Form } from "../../Common/Form/Form";
import contact from "../../../assets/contactUs.svg";

export const Cybersecurity = () => {
    return <div className="website">
        <section className="page-head">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Cyber security Services</h1>
                        <p className="pageSubTitle"> Service</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="description">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 centerMid">
                        <div >
                            <h1>Cyber security Services</h1>
                            <p>We provide comprehensive cyber security services to protect your business from evolving threats. From risk assessments to 24/7 monitoring, we ensure your digital assets are secure at all times.</p>

                        </div>
                    </div>
                    <div className="col-md-6 centerMid">
                        <img src={cyber} alt="" className="w-75" />
                    </div>
                </div>
            </div>
        </section>
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>Key Features</h1>
                        <p>Safeguard your business with advanced cybersecurity solutions that defend against evolving digital threats.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-user-secret"></i>
                            <h3> Threat detection and prevention</h3>
                            <p>Proactively identify and address security vulnerabilities before they turn into major threats.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-binoculars"></i>
                            <h3> Real-time monitoring</h3>
                            <p>Benefit from round-the-clock monitoring to ensure your systems are secure and protected at all times.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-shield-halved"></i>
                            <h3>Risk assessment and mitigation </h3>
                            <p>We conduct thorough risk assessments to identify potential security weaknesses and implement effective mitigation strategies.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-file-shield"></i>
                            <h3> Data encryption and protection</h3>
                            <p>Ensure that sensitive data remains secure with top-tier encryption and cybersecurity protocols.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-building-shield"></i>
                            <h3> Compliance with industry regulations</h3>
                            <p>We help your business meet regulatory compliance standards, such as GDPR and HIPAA, to ensure data security and legal compliance.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-door-open"></i>
                            <h3> Incident Response and Recovery</h3>
                            <p>In the event of a security breach, we offer swift incident response services to minimize damage and ensure a fast recovery.</p>
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
                        <p>A financial institution requires enhanced security measures to protect sensitive customer data. Our cybersecurity services implement advanced encryption and 24/7 monitoring to prevent unauthorized access and cyber threats.</p>
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