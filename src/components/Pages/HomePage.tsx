import React, { useContext, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../Shared/Hero';
import HowWeHelp from './Home/HowWeHelp';
import GetStartedBanner from './Home/GetStartedBanner';
import BailBondInfo from './Home/BailBondInfo';
import CoverageBanner from './Home/CoverageBanner';
import Map from './Home/Map';
import Resources from './Home/Resources';
import { SiteContext } from '../../context/SiteContext';
import { useInView } from 'framer-motion';

const HomePage: React.FC = () => {
  const altImgRef = useRef(null);
  const isInView = useInView(altImgRef, { margin: '0px 100px 0px 0px' });
  const { isGreaterThan768, updateBgImage } = useContext<any>(SiteContext);

  useEffect(() => {
    updateBgImage(isInView ? 'alternate' : 'default');
  }, [isInView]);

  return (
    <Box>
      <Hero variant='home' />
      <HowWeHelp />
      <GetStartedBanner />
      <BailBondInfo />
      <Resources altImgRef={altImgRef} />
      {isGreaterThan768 && <CoverageBanner />}
      <Map />
    </Box>
  );
};

export default HomePage;
