import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio,
  Img,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';

const Result: NextPage = () => {
  return (
    <>
      <Layout>
        <Flex py="10" bg="blue.100" textAlign="center" justify="center">
          <Text fontSize="4xl" pt="200px" pr="20">
            あなたにおすすめのロールモデルはこちらです
          </Text>

          <Img src="/fs-top-eyecatch.png" w="400px" />
        </Flex>
        <Flex my="3" mx="auto" justify="center">
          <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
            マッチ度順
          </Button>
          <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
            いいね順
          </Button>
          <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
            更新日順
          </Button>
        </Flex>

        <Flex>
          <Flex justifyContent="center" wrap="wrap" mx="200px" my="40px" w="60%">
            <ProjectCard
              icon="/nakanishi.JPG"
              title="中西さん"
              date="March 2022"
              memberNums={150}
              content="株式会社ワンキャリアQAエンジニア。ボドゲとコーヒーが好き。明るくて話しやすい性格。"
              topic={['エンジニア', 'QA']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="〇〇さん"
              date="March 2022"
              memberNums={4}
              content="株式会社ワンキャリアCTO。暇な日は車に乗ったりサバゲーをしたりでプライベートも充実。高い所に手が届く"
              topic={['エンジニア', 'CTO', '起業']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="〇〇さん"
              date="March 2022"
              memberNums={4}
              content="株式会社ワンキャリアCTO。暇な日は車に乗ったりサバゲーをしたりでプライベートも充実。高い所に手が届く"
              topic={['エンジニア', 'CTO', '起業']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="〇〇さん"
              date="March 2022"
              memberNums={4}
              content="株式会社ワンキャリアCTO。暇な日は車に乗ったりサバゲーをしたりでプライベートも充実。高い所に手が届く"
              topic={['エンジニア', 'CTO', '起業']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="〇〇さん"
              date="March 2022"
              memberNums={4}
              content="株式会社ワンキャリアCTO。暇な日は車に乗ったりサバゲーをしたりでプライベートも充実。高い所に手が届く"
              topic={['エンジニア', 'CTO', '起業']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="〇〇さん"
              date="March 2022"
              memberNums={4}
              content="株式会社ワンキャリアCTO。暇な日は車に乗ったりサバゲーをしたりでプライベートも充実。高い所に手が届く"
              topic={['エンジニア', 'CTO', '起業']}
            />
          </Flex>
          <Stack mr="10">
            <Flex>
              <Box>検索条件を変更できます</Box>
              <Button rounded="full" px="6" mx="4" colorScheme="blue">
                再検索
              </Button>
            </Flex>

            <Stack mr="16">
              <Box bg="white" pb="10">
                <Text fontSize="2xl">働き方、待遇</Text>

                <FormControl as="fieldset">
                  <FormLabel as="legend">職種</FormLabel>
                  <RadioGroup defaultValue="Itachi">
                    <HStack spacing="24px">
                      <Radio value="Sasuke">決めていない</Radio>
                      <Radio value="Nagato">エンジニア</Radio>
                      <Radio value="Itachi">コンサル</Radio>
                      <Radio value="Itac">公務員</Radio>
                      <Radio value="Itaci">研究職</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box bg="white" py="10">
                <FormControl as="fieldset">
                  <FormLabel as="legend">職種</FormLabel>
                  <RadioGroup defaultValue="Itachi">
                    <HStack spacing="24px">
                      <Radio value="Sasuke">決めていない</Radio>
                      <Radio value="Nagato">エンジニア</Radio>
                      <Radio value="Itachi">コンサル</Radio>
                      <Radio value="Itac">公務員</Radio>
                      <Radio value="Itaci">研究職</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box bg="white" py="10">
                <FormControl as="fieldset">
                  <FormLabel as="legend">職種</FormLabel>
                  <RadioGroup defaultValue="Itachi">
                    <HStack spacing="24px">
                      <Radio value="Sasuke">決めていない</Radio>
                      <Radio value="Nagato">エンジニア</Radio>
                      <Radio value="Itachi">コンサル</Radio>
                      <Radio value="Itac">公務員</Radio>
                      <Radio value="Itaci">研究職</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </Box>
            </Stack>
          </Stack>
        </Flex>
        {/* <Box w="60%" h="600px" ml="400px" border="1px" mb="1">
          <Text fontWeight="bold" fontSize="2xl">
            未完成の部分(TODO)
          </Text>
          <p>やること</p>
        </Box> */}
      </Layout>
    </>
  );
};

export default Result;
