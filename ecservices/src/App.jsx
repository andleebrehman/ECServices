import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage/LandingPage'; 
import TrainingPage from './components/LandingPage/Training/Training';
import ConsultingPage from './components/LandingPage/Consulting/Consulting';
import ConsultingAbout from './components/LandingPage/Consulting/About';
import ConsultingContact from './components/LandingPage/Consulting/Contact';
import ConsultingApply from './components/LandingPage/Consulting/Apply';
import HROutSourcingPage from './components/LandingPage/HR-OutSourcing/HROutSourcing';
import AboutUs from './components/LandingPage/Training/AboutUs';
import BasicCertification from './components/LandingPage/Training/Certifications/Basic-Certification';
import InternationalCertification from './components/LandingPage/Training/Certifications/International-Certification';
import Applynow from './components/LandingPage/Training/Applynow';
import CampusLocation from './components/LandingPage/Training/Certifications/campuslocation';
import MOIT from './components/LandingPage/Training/Bootcamp/moit';
import Moitt from './components/LandingPage/Training/Gallery/moitt';
import CabinetDivision from './components/LandingPage/Training/Gallery/cd';
import Ignite from './components/LandingPage/Training/Gallery/ignite';
import Navttc from './components/LandingPage/Training/Gallery/navttc';
import PPP from './components/LandingPage/Training/Gallery/ppp';
import CSHackathon from './components/LandingPage/Training/Gallery/cshachthon';
import PSEB from './components/LandingPage/Training/Gallery/pseb';
import FacultyRegister from './components/LandingPage/Training/Bootcamp/BootCampRegister/facultyregister';
import ITRegister from './components/LandingPage/Training/Bootcamp/BootCampRegister/ITRegister';
import ContactUs from './components/LandingPage/Training/contactus';
import InHouse from './components/LandingPage/Training/Bootcamp/InHouse';
import Event from './components/LandingPage/Training/Gallery/Event';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/training/basic" element={<BasicCertification />} />
        <Route path="/training/international" element={<InternationalCertification />} />
        <Route path="/training/campus" element={<CampusLocation />} />
        <Route path="/bootcamp/moit" element={<MOIT />} />
        <Route path="/bootcamp/in-house" element={<InHouse />} />
        <Route path="/register/faculty" element={<FacultyRegister />} />
        <Route path="/register/it" element={<ITRegister />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/consulting/about" element={<ConsultingAbout />} />
        <Route path="/consulting/contact" element={<ConsultingContact />} />
        <Route path="/consulting/apply" element={<ConsultingApply />} />
        <Route path="/hr-outsourcing" element={<HROutSourcingPage />} />
        <Route path="/apply" element={<Applynow />} />
        <Route path="/events" element={<Event />} />
        <Route path="/moitt" element={<Moitt />} />
        <Route path="/cabinet-division" element={<CabinetDivision />} />
        <Route path="/ignite" element={<Ignite />} />
        <Route path="/navttc" element={<Navttc />} />
        <Route path="/ppp" element={<PPP />} />
        <Route path="/cshackathon" element={<CSHackathon />} />
        <Route path="/pseb" element={<PSEB />} />
        <Route path="/contact" element={<ContactUs />} />
{/* Fallback route to ensure app lands on LandingPage if route is not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;