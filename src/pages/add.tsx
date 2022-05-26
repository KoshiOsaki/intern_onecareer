import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box h="700px" py="10" px="20">
          こうゆう情報を入力してもらう。
          <Text>実際に書いているES等、さらに詳しい情報</Text>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
