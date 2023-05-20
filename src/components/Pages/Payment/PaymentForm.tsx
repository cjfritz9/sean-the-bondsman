import React,
{
  useContext,
  useRef,
  useState
} from 'react';
import {
  Heading,
  Stack,
  Button,
  Checkbox,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  OrderedList,
  ListItem,
  useToast
} from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const PaymentForm: React.FC = () => {
  const [showTos, setShowTos] = useState(false);
  const [agreeTos, setAgreeTos] = useState(false);
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const toast = useToast();
  const toastIdRef = useRef<any>();

  const handleClick = () => {
    window.open('https://square.link/u/dmoUQns6', '_blank');
  };

  const handleCall = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (isGreaterThan768) {
      navigator.clipboard.writeText('7859692735');
      toastIdRef.current = toast({
        title: 'Phone Number Copied',
        variant: 'top-accent',
        status: 'info',
        duration: 5000,
        isClosable: true
      });
    } else {
      window.open('tel:7859692735');
    }
  };

  const handleModalAgree = () => {
    setAgreeTos(true);
    setShowTos(false);
  };

  return (
    <Stack
      w='100%'
      alignItems='center'
      bgColor='Brand.Celestial'
      py='6rem'
      px='1rem'
      minH='50dvh'
    >
      <Modal isOpen={showTos} onClose={() => setShowTos(false)}>
        <ModalOverlay />
        <ModalContent maxH='80%'>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY='scroll'>
            <Text mb='.5rem'>
              Before using our online payment system, please carefully read and
              agree to the following terms and conditions:
            </Text>
            <OrderedList>
              <ListItem>
                Payment Amounts: Payment amounts must be discussed and arranged
                beforehand via Square, our secure online payment platform. We
                accept all major credit cards through Square. Payment amounts
                must be agreed upon by both parties before any payments are
                processed.
              </ListItem>
              <ListItem>
                Payment Processing: Once a payment amount has been agreed upon,
                the payment will be processed through Square. Please note that
                we do not store any credit card information on our servers.
                Square is a third-party payment processor that uses
                industry-leading security measures to ensure that your payment
                information is kept secure.
              </ListItem>
              <ListItem>
                Refunds: Refunds will be issued at the discretion of
                Seanthebondsman.com. If a refund is issued, it will be processed
                through Square and may take up to 5-7 business days to appear in
                your account.
              </ListItem>
              <ListItem>
                Payment Failure: If a payment is declined or fails for any
                reason, you will be notified immediately via email. It is your
                responsibility to ensure that the payment information you
                provide is accurate and up-to-date.
              </ListItem>
              <ListItem>
                Late Payments: If a payment is not received by the agreed-upon
                due date, you may be subject to additional fees and/or legal
                action.
              </ListItem>
              <ListItem>
                Disputes: Any disputes regarding payments must be brought to our
                attention within 30 days of the payment date.
              </ListItem>
              <ListItem>
                Changes to Payment Terms: We reserve the right to modify these
                payment terms at any time. Any changes will be posted on this
                page and will be effective immediately upon posting.
              </ListItem>
            </OrderedList>
            <Text mt='.5rem'>
              By using our online payment system, you agree to the above terms
              and conditions. If you have any questions or concerns, please
              contact us at info.seanthebondsman@gmail.com.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={handleModalAgree}>
              I agree
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Stack
        maxW='480px'
        alignItems='center'
        textAlign='center'
        gap='2rem'
        color='Brand.White'
      >
        <Heading variant='iwtTitle' color='Brand.White'>
          Pay Quickly & Securely
        </Heading>
        <Text>
          If you have already discussed your bail bond amount with Sean you can
          continue to make your payment quickly and securely by clicking the
          button below and paying with Square. If you have not done this, please
          call Sean before continuing:{' '}
          <u
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={handleCall}
          >
            785-969-2735
          </u>
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
        <Button bgColor='white' color='black' onClick={handleClick} isDisabled={!agreeTos}>
          Continue To Pay
        </Button>
      </Stack>
    </Stack>
  );
};

export default PaymentForm;
