import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import SeantheBondsman from '../../../assets/SeantheBondsman.webp';

const About: React.FC = () => {
  return (
    <Box py={['2rem','4rem']} bgColor='Brand.White' px={['1rem', '2rem']}>
      <Flex
        flexDir={['column', 'column', 'column', 'column', 'row']}
        w='100%'
        gap={['2rem', '2rem', '2rem', '4rem']}
        justifyContent='center'
        alignItems='center'
      >
        <Image
          src={SeantheBondsman}
          h={['320px', '440px', '540px', '600px']}
          w={['320px', '440px', '540px', '600px']}
        />
        <Stack w={['320px', '440px', '540px', '600px']}>
          <Heading
            variant='iwtTitle'
            textAlign={['center', 'center', 'center', 'center', 'left']}
          >
            Meet Sean the Bondsman
          </Heading>
          <Text textAlign={['center', 'center', 'center', 'center', 'left']}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
            odit numquam eius sequi modi eligendi debitis perspiciatis
            dignissimos harum, ducimus doloremque minima quaerat, nesciunt
            pariatur? Accusamus illum sed porro. Soluta dolorum assumenda rem
            consequatur corporis, amet autem veniam error tempora exercitationem
            laudantium eligendi a omnis odio nostrum suscipit sapiente
            consectetur! Amet itaque natus dignissimos deserunt deleniti,
            impedit sit praesentium. Temporibus, illum ut aperiam sunt eveniet
            nulla placeat quis, eos atque hic autem quae tenetur. Consequatur
            quis possimus voluptatem officiis, quos sit aspernatur reiciendis,
            sunt odit ratione eos reprehenderit in? Labore sapiente repellendus
            magni ea officia ipsa! Dolore quas odit porro veritatis nobis
            repellendus similique, animi aliquam id magnam, delectus magni fugit
            expedita et possimus omnis impedit iste, laborum qui! Rem corrupti
            aperiam iusto, odio eaque aut enim molestiae ipsam qui excepturi
            dolorum, quia itaque optio? Nobis labore similique, modi vitae
            tempore consequuntur doloribus, hic voluptates quod possimus harum
            numquam. Dolorum, voluptatibus excepturi alias assumenda veniam
            neque sapiente maxime, animi suscipit, rerum id nobis? Aliquam nemo
            facere esse laboriosam quidem tempore facilis quo doloremque ab?
            Placeat numquam alias natus deserunt. Impedit quibusdam aliquam
            suscipit vel numquam, explicabo cumque neque hic consectetur maxime
            iste quasi amet exercitationem. Laboriosam voluptatibus nihil
            sapiente, dicta culpa ipsum qui rerum inventore aliquid quod quae
            optio.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default About;
