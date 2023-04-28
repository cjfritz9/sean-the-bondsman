import { Box, useMediaQuery } from '@chakra-ui/react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import { SiteContext } from '../context/SiteContext';
import HomePage from './Pages/HomePage';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
// import Cursor from './Cursor';
// import Loading from './Loading';
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';
// import Demos from './pages/Demos';
// import Home from './pages/Home';

const App: React.FC = () => {
  const [isGreaterThan768] = useMediaQuery(['(min-width: 768px)']);
  const { isLoading } = useContext<any>(SiteContext);

  return (
    <Box
      minH='100vh'
      maxW='100vw'
      overflowX='hidden'
      bgColor='Brand.Celestial'
      fontFamily='ABeeZee'
      // mt='72px'
    >
      {/* {isGreaterThan768 && <Cursor />} */}
      <Header />
      {/* {isLoading && <Loading />} */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/*<Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/demos' element={<Demos />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      {/* <Ankle /> */}
      <Footer />
    </Box>
  );
};

export default App;
