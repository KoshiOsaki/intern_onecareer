import { Box, Button, Center, chakra, Flex, HTMLChakraProps, Icon, Img, Text, Tooltip } from '@chakra-ui/react';
import { HTMLMotionProps, motion, useAnimation } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import { EventBox } from '../components/EventBox';
import { LargeButton } from '../components/LargeButton';
import { Layout } from '../components/Layout';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Detail: NextPage = () => {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(150);
  const controls = useAnimation();
  const toggleLike = async () => {
    (await isLike) ? setCount(count - 1) : setCount(count + 1);
    await setIsLike(!isLike);
    controls.start({ scale: [1, 1.3, 1.6, 1.3, 1] });
  };
  type Merge<P, T> = Omit<P, keyof T> & T;
  type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

  const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

  return (
    <>
      <Layout>
        <Box py="10" bg="blue.100" textAlign="center">
          <Flex py="10" bg="blue.100" textAlign="center" justify="center">
            <Img src="/onecareer.JPG" w="600px" />
            <Text fontSize="4xl" pt="200px" pl="20">
              中西さんのキャリア詳細
            </Text>
            <Box>
              <Box display="flex" alignItems="center" color="gray.500">
                <MotionBox cursor="pointer" onClick={toggleLike} animate={controls} transition={{ duration: 0.2 }}>
                  <Icon as={isLike ? AiFillHeart : AiOutlineHeart} mr="2.5" fontSize="60px" color={isLike ? 'red.400' : ''} />
                </MotionBox>
                <Text>{count}</Text>
              </Box>
              <Button rounded="full" mt="2">
                シェア
              </Button>
            </Box>
          </Flex>
          <Flex></Flex>
          <Flex mt="16" justify="center">
            <Box w="45%" boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} bg="white" mx="3">
              <Text fontSize="2xl" fontWeight="bold">
                WORK
              </Text>
              <Box mt="">
                <EventBox date="2020年 4月" title="京都大学情報学研究科　入学" />
              </Box>
              <Box mt="200px">
                <EventBox date="2022年 4月" title="株式会社ワンキャリア 入社　QAエンジニア" />
              </Box>
              <Box mt="200px">
                <EventBox date="2024年 4月" title="エンジニアリングマネージャーになる" />
              </Box>
              <Box mt="200px">
                <EventBox date="2026年 4月" title="株式会社メルカリ　入社　エンジニアリングマネージャー" />
              </Box>
            </Box>
            <Box w="45%" boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} bg="white" mx="3">
              <Text fontSize="2xl" fontWeight="bold">
                LIFE
              </Text>
              <Box mt="400px">
                <EventBox date="2023年 6月" title="マイカーを購入" />
              </Box>
              <Box mt="130px">
                <EventBox date="2024年 5月" title="結婚" />
              </Box>
              <Box mt="40px">
                <EventBox date="2025年 9月" title="第一子を授かる" />
              </Box>
            </Box>
          </Flex>
          <Box w="90%" boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} bg="white" mx="auto" mt="16">
            <Text fontSize="2xl" fontWeight="bold">
              Q&A
            </Text>
            <Box mt="400px">
              <LargeButton text="面談を申し込む" href="/add" />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Detail;
