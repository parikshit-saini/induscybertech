import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './components/Pages/Home';
import { Main } from './components/Pages/Main';
// import * as $ from "jquery"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { AboutUs } from './components/Pages/AboutUs';
import { Itsolutions } from './components/Pages/Services/Itsolutions';
import { Projectdevelopment } from './components/Pages/Services/Projectdevelopment';
import { Cloudsolutions } from './components/Pages/Services/Cloudsolutions';
import { Cybersecurity } from './components/Pages/Services/Cybersecurity';
import { Contactus } from './components/Pages/Contactus';
import { TermsConditions } from './components/Pages/policy/TermsConditions';
import { PrivacyPolicy } from './components/Pages/policy/PrivacyPolicy';
import { Disclaimer } from './components/Pages/policy/Disclaimer';
import { Thankyou } from './components/Pages/Thankyou';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Main />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="IT-solutions" element={<Itsolutions />} />
        <Route path="Project-Development" element={<Projectdevelopment />} />
        <Route path="Cloud-Solutions" element={<Cloudsolutions />} />
        <Route path="Cybersecurity" element={<Cybersecurity />} />
        <Route path="Contact-us" element={<Contactus />} />
        <Route path="Terms-and-conditions" element={<TermsConditions />} />
        <Route path="Disclaimer" element={<Disclaimer />} />
        <Route path="Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="Thankyou" element={<Thankyou />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
