import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './LandingPage/Training/Navbar';
import Footer from './LandingPage/Training/Footer';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const isConsultingPage = location.pathname.startsWith('/consulting');
  const isITServicesPage = location.pathname.startsWith('/it-services') || location.pathname.startsWith('/it-training');
  
  // Decide whether to show the global Navbar
  const showNavbar = !isLandingPage && !isConsultingPage && !isITServicesPage;
  // Decide whether to show the global Footer
  const showFooter = !isLandingPage && !isConsultingPage && !isITServicesPage;

  return (
    <div className="layout">
      {showNavbar && <Navbar />}
      <main className="main-content" style={isLandingPage ? { paddingTop: 0 } : {}}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
