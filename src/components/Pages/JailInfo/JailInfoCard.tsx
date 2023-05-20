import React, { useContext, useRef } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  Flex,
  Icon,
  Skeleton,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react';
import { BsFillTelephoneFill, BsMapFill } from 'react-icons/bs';
import { JailData } from './JailData';
import { SiteContext } from '../../../context/SiteContext';

interface JailInfoCardProps extends JailData {
  isSearchLoading: boolean;
}

const JailInfoCard: React.FC<JailInfoCardProps> = ({
  name,
  address,
  phone,
  isSearchLoading
}) => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const toast = useToast();
  const toastIdRef = useRef<any>();

  const handleCall = (number: string) => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (isGreaterThan768) {
      navigator.clipboard.writeText(number);
      toastIdRef.current = toast({
        title: 'Phone Number Copied',
        variant: 'top-accent',
        status: 'info',
        duration: 5000,
        isClosable: true
      });
    } else {
      window.open(`tel:${number}`);
    }
  };

  const handleMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURI(address)}`,
      '_blank'
    );
  };

  return (
    <Skeleton isLoaded={!isSearchLoading}>
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
              bgColor='#E7E7E7'
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
                  onClick={() => handleCall(phone)}
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
                  onClick={handleMap}
                >
                  <Text>{address}</Text>
                  <Icon as={BsMapFill} />
                </Flex>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
    </Skeleton>
  );
};

export default JailInfoCard;
