import { Box, Button, Flex, HStack, Img, Link, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { LargeButton } from '../components/LargeButton';

const Select: NextPage = () => {
  return (
    <>
      <Layout>
        <Flex py="10" bg="blue.100" textAlign="center" justify="center">
          <Img src="/price_step_01.png" w="150px" h="150px" />
          <Text fontSize="2xl" pt="100px" px="20">
            あなたの目指したいキャリアを知るために、以下の項目を選択していって下さい。
          </Text>
          <Img src="/service_bs_01.png" w="150px" h="150px" />
        </Flex>
        <Box py="10" bg="blue.100" textAlign="center">
          <Stack>
            <Box bg="white" pb="10">
              <Text fontSize="2xl">働き方、待遇</Text>
              <FormControl as="fieldset" ml="400px">
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
              <FormControl as="fieldset" ml="400px">
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
              <FormControl as="fieldset" ml="400px">
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
        </Box>
        <Img src="koumoku.png" />
        <LargeButton text="結果をみる" href="/result" />
      </Layout>
    </>
  );
};

export default Select;
