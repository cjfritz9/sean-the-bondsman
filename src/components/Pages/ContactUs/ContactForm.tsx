import React, { useContext, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
  Spinner,
  Heading,
  Divider,
  Tooltip
} from '@chakra-ui/react';
import { validateMailForm } from '../../../utils/helpers';
import sendMail from '../../../api/EmailAPI';
import { SiteContext } from '../../../context/SiteContext';

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const handleSend = async () => {
    setIsLoading(true);
    const userInput = {
      name: '',
      number: '',
      email: '',
      message: ''
    };

    userInput.name = (
      document.getElementById('cf-name')! as HTMLInputElement
    ).value;
    userInput.email = (
      document.getElementById('cf-email')! as HTMLInputElement
    ).value;
    userInput.number = (
      document.getElementById('cf-number')! as HTMLInputElement
    ).value;
    userInput.message = (
      document.getElementById('cf-msg')! as HTMLInputElement
    ).value;

    const formStatusMsg = validateMailForm(userInput);
    console.log(formStatusMsg);

    if (formStatusMsg !== 'Success') {
      setIsLoading(false);
      return setMessage(formStatusMsg);
    }

    const response = await sendMail(userInput);
    if (response.success) setMessage(response.success);
    if (response.error) setMessage(response.error);
    setIsLoading(false);
    (document.getElementById('cf-name')! as HTMLInputElement).value = '';
    (document.getElementById('cf-number')! as HTMLInputElement).value = '';
    (document.getElementById('cf-email')! as HTMLInputElement).value = '';
    (document.getElementById('cf-msg')! as HTMLInputElement).value = '';
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

  return (
    <Flex
      w='100%'
      justifyContent='center'
      bgColor='#00BBFF'
      py={['2rem', '3rem', '6rem']}
      px='1rem'
    >
      <Stack w={['100%', '480px', '720px']} gap='2rem' alignItems='center'>
        <Heading variant='iwtTitle' fontFamily='Poppins' textAlign='center'>
          Get In Touch
        </Heading>
        <Text>
          If you need help in a timely manner please give Sean a call and he can
          help you ASAP. For any other general inquiries you can fill the form
          out below.
        </Text>
        {showCallTooltip ? (
          <Tooltip label='Phone Number Copied' closeOnClick={false}>
            <Button onClick={handleCall}>CALL NOW</Button>
          </Tooltip>
        ) : (
          <Button onClick={handleCall}>CALL NOW</Button>
        )}
        <Divider />
        <FormControl>
          <Stack gap='1rem' fontFamily='Poppins' color='Brand.Penn'>
            <Stack gap='.5rem' onClick={() => setMessage('')}>
              <Flex gap='1.5rem' direction={['column', 'row']}>
                <Input
                  _placeholder={{ color: '#555555' }}
                  id='cf-name'
                  bgColor='Brand.White'
                  color='Brand.Persian'
                  placeholder='Your Name'
                  type='text'
                />
                <Input
                  _placeholder={{ color: '#555555' }}
                  id='cf-number'
                  bgColor='Brand.White'
                  color='Brand.Persian'
                  placeholder='Phone Number'
                  type='tel'
                />
                <Input
                  _placeholder={{ color: '#555555' }}
                  id='cf-email'
                  bgColor='Brand.White'
                  color='Brand.Persian'
                  placeholder='Email'
                  type='email'
                />
              </Flex>
              <Textarea
                _placeholder={{ color: '#555555' }}
                id='cf-msg'
                h={['184px']}
                bgColor='Brand.White'
                color='Brand.Persian'
                placeholder='Message'
              />
            </Stack>
            <Flex
              direction={['column', 'row']}
              gap={['1rem', '0rem']}
              w='100%'
              fontFamily='Poppins'
              justify={message.length ? 'space-between' : 'flex-end'}
            >
              <Text
                opacity={message.length > 0 ? 1 : 0}
                transition='opacity .3s ease-in'
                fontWeight='bold'
                color={
                  message === 'Your Message Was Sent' ? 'Brand.White' : 'red.600'
                }
              >
                {message.length > 0 && message}
              </Text>
              <Button
                w={['100%', '10rem']}
                onClick={handleSend}
              >
                {isLoading ? <Spinner /> : 'Send'}
              </Button>
            </Flex>
          </Stack>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default ContactForm;
