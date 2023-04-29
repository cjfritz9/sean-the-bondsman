import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import Hero from './Home/Hero';
import HowWeHelp from './Home/HowWeHelp';
import GetStartedBanner from './Home/GetStartedBanner';
import BailBondInfo from './Home/BailBondInfo';
import CoverageBanner from './Home/CoverageBanner';
import { SiteContext } from '../../context/SiteContext';

const HomePage: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  return (
    <Box>
      <Hero />
      <HowWeHelp />
      <GetStartedBanner />
      <BailBondInfo />
      {isGreaterThan768 && <CoverageBanner />}
    </Box>
  );
};

export default HomePage;
