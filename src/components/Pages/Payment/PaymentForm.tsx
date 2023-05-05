import React, { useContext, useState } from 'react';
import {
  Button,
  Checkbox,
  Heading,
  Stack,
  Text,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const PaymentForm: React.FC = () => {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [showTos, setShowTos] = useState(false);
  const [agreeTos, setAgreeTos] = useState(false);
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const handleClick = () => {
    window.open('https://buy.stripe.com/test_aEUfZE8Sz1L17qE7ss', '_blank');
  };

  const handleCall = () => {
    if (isGreaterThan768) {
      navigator.clipboard.writeText('7859692735');
      setShowCallTooltip(true);
      setTimeout(() => {
        setShowCallTooltip(false);
      }, 2500);
    } else {
      window.open('tel:7859692735');
    }
  };

  const handleModalAgree = () => {
    setAgreeTos(true);
    setShowTos(false);
  };

  return (
    <Stack w='100%' alignItems='center' bgColor='Brand.Celestial' py='6rem'>
      <Modal isOpen={showTos} onClose={() => setShowTos(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quam natus voluptatem cupiditate deserunt voluptate qui iste,
              amet, voluptatibus molestiae mollitia ratione expedita eligendi
              nulla obcaecati commodi temporibus aspernatur provident? Aliquam
              dicta illum voluptates enim ad praesentium aliquid ipsa quo minus
              nam consequatur, asperiores nulla perspiciatis cupiditate
              excepturi est incidunt, voluptatibus, optio sequi consequuntur!
              Voluptas inventore tenetur tempore deleniti sint?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={handleModalAgree}>
              I agree
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Stack maxW='480px' alignItems='center' textAlign='center' gap='2rem'>
        <Heading variant='iwtTitle'>Pay Quickly & Securely</Heading>
        <Text>
          If you have already discussed your bail bond amount with Sean you can
          continue to make your payment quickly and securely by clicking the
          button below and paying with Stripe. If you have not done this, please
          call Sean before continuing:{' '}
          {showCallTooltip ? (
            <Tooltip label='Phone Number Copied' closeOnClick={false}>
              <u
                style={{ cursor: 'pointer', fontWeight: 'bold' }}
                onClick={handleCall}
              >
                785-969-2735
              </u>
            </Tooltip>
          ) : (
            <u
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={handleCall}
            >
              785-969-2735
            </u>
          )}
        </Text>
        <Stack alignItems='center'>
          <Text>
            By submitting payment you agree that you have read and agree to our{' '}
            <u
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => setShowTos(true)}
            >
              Terms of Service.
            </u>
          </Text>
          <Checkbox
            id='checkbox'
            colorScheme='green'
            isChecked={agreeTos}
            onChange={() => setAgreeTos((prev) => !prev)}
          >
            I agree
          </Checkbox>
        </Stack>
        <Button onClick={handleClick} isDisabled={!agreeTos}>
          Continue To Pay
        </Button>
      </Stack>
    </Stack>
  );
};

export default PaymentForm;
