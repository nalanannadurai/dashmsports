import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './landing/Navbar';
import Footer from './landing/Footer';
import ConsultationModal from './ConsultationModal';
import DashAIChat from './DashAIChat';

export default function Layout() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [dashAIOpen, setDashAIOpen] = useState(false);

  useEffect(() => {
    const consultHandler = () => setConsultOpen(true);
    const dashAIHandler = () => setDashAIOpen(true);
    window.addEventListener('open-consultation', consultHandler);
    window.addEventListener('open-dash-ai', dashAIHandler);
    return () => {
      window.removeEventListener('open-consultation', consultHandler);
      window.removeEventListener('open-dash-ai', dashAIHandler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBookConsultation={() => setDashAIOpen(true)} />
      <Outlet />
      <Footer />
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} defaultService="" />
      <DashAIChat isOpen={dashAIOpen} onClose={() => setDashAIOpen(false)} />
    </div>
  );
}