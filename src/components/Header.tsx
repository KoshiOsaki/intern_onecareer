import { Box, Divider, Flex, HStack, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <Flex justifyContent="space-between" zIndex="100" fontWeight="bold" fontSize="2xl" textColor="black" pt="4" bg="white">
        <Flex>
          <Img src="./favicon.ico" w="42px" mx="5" />
          <Text fontWeight="bold">ONE CAREER_intern</Text>
        </Flex>

        <HStack pr="9">
          <span className="material-icons">thumb_up</span>
          <span className="material-symbols-outlined">person</span>
          <span className="material-symbols-outlined">help</span>
        </HStack>
      </Flex>
      <Divider bgColor="black" fontSize="4xl" />
    </>
  );
};
