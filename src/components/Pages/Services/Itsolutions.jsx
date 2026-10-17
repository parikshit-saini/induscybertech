import itsolutions from "../../../assets//itsolutions.svg"
import { Form } from "../../Common/Form/Form";
import contact from "../../../assets/contactUs.svg";

export const Itsolutions = () => {
    return <div className="website">
        <section className="page-head">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>IT Staff Augmentation</h1>
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
                            <h1>IT Staff Augmentation</h1>
                            <p>IT Staff Augmentation provides flexible staffing solutions by integrating skilled IT professionals into your existing team. Whether you need to fill a temporary gap or bring in specialized talent, we provide the right resources for your project’s success.</p>

                        </div>
                    </div>
                    <div className="col-md-6 centerMid">
                        <img src={itsolutions} alt="" className="w-50" />
                    </div>
                </div>
            </div>
        </section>
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-12 commonHeading">
                        <h1>Key Features</h1>
                        <p>Enhance your team with expert IT professionals through our flexible, scalable, and cost-effective staffing solutions.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-users-rays"></i>
                            <h3> Access to top-tier talent</h3>
                            <p>Gain immediate access to a pool of highly skilled IT professionals, carefully selected to meet your specific project requirements and technical needs.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                            <h3> Cost-effective hiring model</h3>
                            <p>Avoid the overhead costs associated with full-time employees by choosing a flexible, budget-friendly staffing model that aligns with your project scope.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-users-gear"></i>
                            <h3>Flexible staffing solutions </h3>
                            <p>Whether you need resources for a short-term project or an extended partnership, our flexible staffing options adapt to your evolving business demands.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i>
                            <h3> Seamless integration with your team</h3>
                            <p>Our professionals integrate smoothly with your existing team, ensuring minimal disruption while enhancing collaboration and productivity.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-chalkboard-user"></i>
                            <h3> Fast onboarding process</h3>
                            <p>We expedite the onboarding process to get the right talent working on your project quickly, minimizing delays and ensuring swift project progress.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mt-3">
                        <div className="content">
                            <i className="fa-solid fa-users-rectangle"></i>
                            <h3> Global Talent Pool</h3>
                            <p>Access skilled professionals from a diverse global talent pool, ensuring that your projects are completed with the best expertise available worldwide.</p>
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
                        <p>A company facing tight deadlines needs additional developers to accelerate project delivery. IT Staff Augmentation allows them to quickly onboard the required expertise and meet deadlines without hiring full-time employees.</p>
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