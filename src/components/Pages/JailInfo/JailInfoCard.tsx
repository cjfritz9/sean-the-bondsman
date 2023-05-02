import React, { useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  Flex,
  Icon,
  Stack,
  Text
} from '@chakra-ui/react';
import { BsFillTelephoneFill, BsMapFill } from 'react-icons/bs';
import { JailData } from './JailData';

const JailInfoCard: React.FC<JailData> = ({ name, address, phone }) => {
  return (
    <Card w='320px'>
      <Accordion allowToggle borderBottom='none'>
        <AccordionItem borderBottom='none'>
          <AccordionButton>
            <Flex w='100%' justifyContent='space-between'>
              <Text fontWeight='bold'>{name}</Text>
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel
            p='0'
            bgColor='#49B6FA'
            borderRadius='0px 0px 5px 5px'
          >
            <Stack>
              <Flex
                alignItems='center'
                gap='2rem'
                w='100%'
                _hover={{ bgColor: 'Brand.Celestial' }}
                transition='background-color .5s ease'
                cursor='pointer'
                px='1rem'
                py='.5rem'
                justifyContent='space-between'
              >
                <Text>{phone}</Text>
                <Icon as={BsFillTelephoneFill} />
              </Flex>
              <Flex
                alignItems='center'
                gap='2rem'
                w='100%'
                _hover={{
                  bgColor: 'Brand.Celestial',
                  borderRadius: '0px 0px 5px 5px'
                }}
                transition='background-color .5s ease'
                cursor='pointer'
                mt='0 !important'
                px='1rem'
                py='.5rem'
                justifyContent='space-between'
              >
                <Text>{address}</Text>
                <Icon as={BsMapFill} />
              </Flex>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default JailInfoCard;
