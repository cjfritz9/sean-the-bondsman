import { Box, useMediaQuery } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { SiteContext } from '../context/SiteContext';
import HomePage from './Pages/HomePage';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import AboutUsPage from './Pages/AboutUsPage';
import FormsAndInfoPage from './Pages/FormsAndInfoPage';
import JailInfoPage from './Pages/JailInfoPage';
import ApexMonitoringPage from './Pages/ApexMonitoringPage';
import ContactUsPage from './Pages/ContactUsPage';
import PaymentPage from './Pages/PaymentPage';
import Announcement from './Shared/Announcement';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';

import backgroundImage from '../assets/logo-lg.webp';
import mobileBg from '../assets/logo-mobile.webp';
import alternateBg from '../assets/topeka-capital-building.webp';
import mobileAltBg from '../assets/topeka-capital-building-mobile.webp';
import PaymentSuccessPage from './Pages/PaymentSuccessPage';

const App: React.FC = () => {
  const [isGreaterThan768] = useMediaQuery(['(min-width: 768px)']);
  const { updatePageTitle, setIsGreaterThan768, bgImage } =
    useContext<any>(SiteContext);
  const location = useLocation();

  useEffect(() => {
    document.title = updatePageTitle(location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    setIsGreaterThan768(isGreaterThan768);
  }, [isGreaterThan768]);

  return (
    <Box
      minH='100dvh'
      maxW='100dvw'
      overflowX='hidden'
      bgColor='Brand.White'
      bgImage={
        isGreaterThan768 && bgImage === 'default'
          ? backgroundImage
          : !isGreaterThan768 && bgImage === 'default'
          ? mobileBg
          : isGreaterThan768 && bgImage === 'alternate'
          ? alternateBg
          : mobileAltBg
      }
      bgAttachment='fixed'
      fontFamily='Poppins, sans-serif'
      bgPosition='top'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Header />
      <Announcement />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/forms-and-info' element={<FormsAndInfoPage />} />
        <Route path='/jail-info' element={<JailInfoPage />} />
        <Route path='/apex' element={<ApexMonitoringPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/payment-success' element={<PaymentSuccessPage />} />
        <Route path='/privacy' element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
