import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Img, Link, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { LargeButton } from '../components/LargeButton';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box position="absolute" top="0" zIndex="-1">
          <Img src="/topbar.png" w="2000px" />
          <Box zIndex="1000" left="50%" top="50%" m="-400px" textAlign="center">
            <Text textColor="white" fontSize="4xl" fontWeight="bold" display="inline-block" my="4">
              あなたにあったロールモデルを見つけ、キャリアイメージを明確にしよう
            </Text>
            <Text textColor="white" fontWeight="bold" my="4">
              あなたにあったロールモデルを見つけ、キャリアイメージを明確にしよう
            </Text>
            <Link href="/login">
              <Button rounded="full" bgColor="green.300" my="4">
                新規会員登録(無料)
              </Button>
            </Link>
            <Text textColor="white" borderBottom="2px" borderColor="white">
              <Link borderBottom="2px" borderColor="white">
                ログイン
              </Link>
            </Text>
          </Box>
        </Box>
        <Box h="800px"></Box>
        <Box textAlign="center">
          <ChevronDownIcon w={20} color="white" />
        </Box>
        <LargeButton text="診断する" href="/login" />
      </Layout>
    </>
  );
};

export default Home;
