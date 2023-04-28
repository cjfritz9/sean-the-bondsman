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
import FAQPage from './Pages/FAQPage';
import Announcement from './Shared/Announcement';

const App: React.FC = () => {
  const [isGreaterThan768] = useMediaQuery(['(min-width: 768px)']);
  const { updatePageTitle, isLoading } = useContext<any>(SiteContext);
  const location = useLocation();

  useEffect(() => {
    document.title = updatePageTitle(location.pathname);
  }, [location]);

  return (
    <Box
      minH='100dvh'
      maxW='100dvw'
      overflowX='hidden'
      bgColor='Brand.Celestial'
      fontFamily='ABeeZee'
      // mt='72px'
    >
      {/* {isGreaterThan768 && <Cursor />} */}
      <Header />
      <Announcement />
      {/* {isLoading && <Loading />} */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/forms-and-info' element={<FormsAndInfoPage />} />
        <Route path='/jail-info' element={<JailInfoPage />} />
        <Route path='/apex' element={<ApexMonitoringPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/faq' element={<FAQPage />} />
      </Routes>
      {/* <Ankle /> */}
      <Footer />
    </Box>
  );
};

export default App;
