import { FC } from 'react';
import Link from 'next/link';
import style from '../styles/Button.module.css';
import { Glass } from './Glass';
import { Box, Text } from '@chakra-ui/react';

interface Props {
  text: string;
  href: string;
}

export const LargeButton: FC<Props> = ({ text, href }) => {
  return (
    <Glass textAlign="center" rounded="lg" w="600px" mx="auto" my="10">
      <Link href={href}>
        <Box
          py="3"
          px="4"
          h="100px"
          w="600px"
          fontSize="2xl"
          rounded="lg"
          fontWeight="bold"
          borderColor="white"
          cursor="pointer"
          d="flex"
          alignItems="center"
          justifyContent="center"
          className={style.button}
        >
          {text}
          <span className={style.arrow}>
            <p className={style.arrow}>→</p>
          </span>
        </Box>
      </Link>
    </Glass>
  );
};
