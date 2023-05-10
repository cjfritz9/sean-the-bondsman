import React from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Box bgColor='Brand.White' py='5rem' minH='100dvh'>
      <Stack w='100%' alignItems='center'>
        <Stack maxW='800px' gap='1rem'>
          <Heading textAlign='center'>Privacy Policy</Heading>
          <Text>
            Sean the Bondsman is committed to protecting the privacy of its users.
            This Privacy Policy explains the type of information we collect and
            how we use, share, and protect that information.
          </Text>
          <Text fontWeight='bold'>Information We Collect</Text>
          <Text>
            We collect information that you voluntarily provide to us when you
            use our website. This may include your name, address, phone number,
            email address, and other information that you provide when you fill
            out our contact form or request more information. We also collect
            information about your visit to our website, including your IP
            address, the pages you visited, and the time and date of your visit.
          </Text>
          <Text fontWeight='bold'>How We Use Your Information</Text>
          <Text>
            We use your information to communicate with you about our services
            and to provide you with information that you have requested. We may
            also use your information to improve our website and to customize
            your experience on our site.
          </Text>
          <Text>
            We do not sell, rent, or lease your personal information to third
            parties. However, we may share your information with our partners,
            affiliates, and service providers who help us provide our services
            to you.
          </Text>
          <Text>
            We may also disclose your information if we are required to do so by
            law, or if we believe that such action is necessary to comply with
            legal process or to protect our rights, property, or personal
            safety, or that of our users.
          </Text>
          <Text fontWeight='bold'>Cookies</Text>
          <Text>
            We use cookies on our website to collect information about how you
            use our site. Cookies are small text files that are stored on your
            computer or mobile device when you visit certain websites. We use
            cookies to help us remember your preferences and to improve your
            experience on our site.
          </Text>
          <Text fontWeight='bold'>Security</Text>
          <Text>
            We take reasonable precautions to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet, or method of electronic storage, is
            completely secure. Therefore, we cannot guarantee the absolute
            security of your personal information.
          </Text>
          <Text fontWeight='bold'>Third-Party Links</Text>
          <Text>
            Our website may contain links to other websites that are not owned
            or controlled by Sean the Bondsman. We are not responsible for the
            privacy practices of these websites.
          </Text>
          <Text fontWeight='bold'>Changes to this Privacy Policy</Text>
          <Text>
            We reserve the right to modify this Privacy Policy at any time. If
            we make material changes to this policy, we will notify you by
            posting a notice on our website or by sending you an email.
          </Text>
          <Text>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at info.seanthebondsman@gmail.com.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PrivacyPolicyPage;
