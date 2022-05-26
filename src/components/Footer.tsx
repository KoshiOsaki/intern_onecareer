import { Box, Divider, Flex, Spacer, Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box bgColor="blue.900" textColor="gray.300" pt="8" pb="6">
      <Flex justify="center" mb="9">
        <Stack mx="32">
          <Text textColor="white" fontSize="xl" fontWeight="semibold">
            企業
          </Text>
          <Text>About</Text>
          <Text>Contents</Text>
          <Text>Projects</Text>
        </Stack>

        <Stack mx="32">
          <Text textColor="white" fontSize="xl" fontWeight="semibold">
            アクセス
          </Text>
          <Text>example@gmail.com</Text>
          <Text>@onecareer</Text>
        </Stack>

        <Stack mx="32">
          <Text textColor="white" fontSize="xl" fontWeight="semibold">
            体験談
          </Text>
        </Stack>
      </Flex>
      <Divider />
      <Text mx="20" py="5">
        &copy;ONE CAREER_intern
      </Text>
    </Box>
  );
};
