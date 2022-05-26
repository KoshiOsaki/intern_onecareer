import { Box, Button, Link, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { LargeButton } from '../components/LargeButton';
import { Layout } from '../components/Layout';

const Login: NextPage = () => {
  return (
    <>
      <Layout>
        <Box h="700px" py="10" px="20">
          こうゆう情報を入力してもらう。
          <Text>志望業界</Text>
          <Text>経歴など</Text>
        </Box>
        <LargeButton text="登録して診断する" href="/select" />
      </Layout>
    </>
  );
};

export default Login;
