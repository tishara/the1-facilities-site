import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Technology from './pages/Technology';
import Sectors from './pages/Sectors';
import Cleaning from './pages/Cleaning';
import Maintenance from './pages/Maintenance';
import Security from './pages/Security';
import FacilitiesManagement from './pages/FacilitiesManagement';
import IntegratedSolutions from './pages/IntegratedSolutions';
import OurPeople from './pages/OurPeople';
import QualityAccountability from './pages/QualityAccountability';
import ExpansionMarkets from './pages/ExpansionMarkets';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import SectorHealthcare from './pages/SectorHealthcare';
import SectorHospitality from './pages/SectorHospitality';
import SectorEducation from './pages/SectorEducation';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.aboutUs} element={<AboutUs />} />
        <Route path={ROUTES.technology} element={<Technology />} />
        <Route path={ROUTES.sectors} element={<Sectors />} />
        <Route path={ROUTES.cleaning} element={<Cleaning />} />
        <Route path={ROUTES.maintenance} element={<Maintenance />} />
        <Route path={ROUTES.security} element={<Security />} />
        <Route path={ROUTES.facilitiesManagement} element={<FacilitiesManagement />} />
        <Route path={ROUTES.integratedSolutions} element={<IntegratedSolutions />} />
        <Route path={ROUTES.ourPeople} element={<OurPeople />} />
        <Route path={ROUTES.qualityAccountability} element={<QualityAccountability />} />
        <Route path={ROUTES.expansionMarkets} element={<ExpansionMarkets />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.careers} element={<Careers />} />
        <Route path={ROUTES.sectorHealthcare} element={<SectorHealthcare />} />
        <Route path={ROUTES.sectorHospitality} element={<SectorHospitality />} />
        <Route path={ROUTES.sectorEducation} element={<SectorEducation />} />
      </Routes>
    </BrowserRouter>
  );
}
