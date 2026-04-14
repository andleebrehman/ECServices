import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './LandingPage/Training/Navbar';
import Footer from './LandingPage/Training/Footer';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const isConsultingPage = location.pathname.startsWith('/consulting');
  
  // Decide whether to show the old training Footer
  const showFooter = !isLandingPage && !isConsultingPage;

  return (
    <div className="layout">
      {!isLandingPage && <Navbar />}
      <main className="main-content" style={isLandingPage ? { paddingTop: 0 } : {}}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
