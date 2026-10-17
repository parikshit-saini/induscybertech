
import "../common.scss";
import OwlCarousel from 'react-owl-carousel2';

export const Review = () => {
    const options = {
        items: 1,
        nav: false,
        rewind: false,
        autoplay: true,
        loop: true
    };
    return <section className="review">
        <div className="container">
            <div className="row">
                <div className="col-12 commonHeading">
                    <h1>Client Reviews</h1>
                    <p>At Indus Cyber Tech, we take pride in delivering exceptional IT solutions and staffing services tailored to our clients’ unique needs.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="reviewBox">
                        <OwlCarousel options={options}>
                            <div>
                                <p>We’ve relied on Indus Cyber Tech for several of our IT staffing needs, and they have never disappointed. The professionals they provide are highly skilled and adapt quickly to our work environment. Their recruitment process is top-notch, and they always find the perfect fit for our projects.</p>
                                <h3>Sarah Williams, HR Director at Global Solutions</h3>
                            </div>
                            <div>
                                <p>Working with Indus Cyber Tech has been a game-changer for our business. Their team of professionals seamlessly integrated into our projects and helped us meet tight deadlines with ease. Their attention to detail and commitment to quality truly sets them apart. Highly recommended!</p>
                                <h3> John Doe, Project Manager at Tech Innovations</h3>
                            </div>
                            <div>
                                <p>We’ve relied on Indus Cyber Tech for several of our IT staffing needs, and they have never disappointed. The professionals they provide are highly skilled and adapt quickly to our work environment. Their recruitment process is top-notch, and they always find the perfect fit for our projects.</p>
                                <h3>Sarah Williams, HR Director at Global Solutions</h3>
                            </div>
                            <div>
                                <p>Indus Cyber Tech’s cybersecurity solutions helped us identify critical vulnerabilities in our system. Their team conducted a thorough risk assessment and provided effective solutions to strengthen our security. Their expertise and professionalism exceeded our expectations.</p>
                                <h3>Michael Smith, CTO at SecureNet Corp</h3>
                            </div>
                            <div>
                                <p>We partnered with Indus Cyber Tech for a large-scale IT project, and they delivered beyond our expectations. Their end-to-end project management was flawless, and the final product was robust and scalable. It’s rare to find a partner that delivers both quality and efficiency.</p>
                                <h3>Emily Johnson, CEO at InnovateX</h3>
                            </div>
                            <div>
                                <p>Indus Cyber Tech made the process of augmenting our IT team so easy. They provided skilled professionals who integrated smoothly into our team and contributed significantly to our project's success. I wouldn’t hesitate to work with them again in the future.</p>
                                <h3>David Lee, IT Director at NextGen Solutions</h3>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
}