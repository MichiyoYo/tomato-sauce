import { HStack, IconButton, Link, Text, VStack } from '@chakra-ui/react';
import styled from 'styled-components';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.div`
  flex: 0 2 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <VStack align='center' padding={4}>
      <HStack spacing={2}>
        <Link href='https://github.com/michiyoyo' isExternal>
          <FaGithubAlt />
        </Link>
        <Link
          href='https://www.linkedin.com/in/cristinalesterrocks/'
          isExternal
        >
          <FaLinkedinIn />
        </Link>
      </HStack>
      <Text fontSize={'xs'} fontWeight='semibold'>
        <Link href='https://cristinalester.rocks' isExternal>
          Cristina Lester
        </Link>{' '}
        &copy; 2024
      </Text>
    </VStack>
  );
};

export default Footer;
