import {
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Img,
  Center,
  Link,
  Badge,
  Flex,
} from '@chakra-ui/react';
import style from '../styles/WorkCard.module.css';

interface Props {
  date: string;
  title: string;
}

export const EventBox = ({ date, title }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box mx="5" my="9" onClick={onOpen} className={style.shake} p="2">
        <Text my="2">
          {date}　{title}
        </Text>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent h="650px" className={style.modal} overflow="scroll">
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody py="7" px={{ base: '1', md: '10' }}>
            <Text fontWeight="bold" fontSize="xl" mb="3">
              {title}
            </Text>
            <Text fontSize="sm" textColor="gray.700" textAlign="center">
              {date}~
            </Text>

            <Flex mt="3" mb="6" px="20">
              <Box w="50%">
                <Box
                  display="inline-block"
                  px="1"
                  fontSize="xs"
                  fontWeight="semibold"
                  rounded="sm"
                  className={style.badge_ora}
                  m="1"
                  textColor="orange.800"
                  boxShadow="0 0 3px 3px rgba(0, 0, 0, 0.1)"
                >
                  年収
                </Box>

                <Text fontSize="sm">400~600万</Text>
              </Box>
              <Box w="50%">
                <Box
                  display="inline-block"
                  px="1"
                  fontSize="xs"
                  fontWeight="semibold"
                  rounded="sm"
                  className={style.badge_pi}
                  m="1"
                  textColor="pink.800"
                  boxShadow="0 0 3px 3px rgba(0, 0, 0, 0.1)"
                >
                  週労働時間
                </Box>
                <Text fontSize="sm">40時間</Text>
              </Box>
            </Flex>
            <Box
              display="inline-block"
              px="1"
              fontSize="xs"
              fontWeight="semibold"
              rounded="sm"
              className={style.badge_pi}
              m="1"
              textColor="pink.800"
              boxShadow="0 0 3px 3px rgba(0, 0, 0, 0.1)"
            >
              力を入れて取り組んでいたこと
            </Box>
            <Box>テストやQAに関する勉強</Box>
            <Box
              display="inline-block"
              px="1"
              fontSize="xs"
              fontWeight="semibold"
              rounded="sm"
              className={style.badge_ora}
              m="1"
              textColor="orange.800"
              boxShadow="0 0 3px 3px rgba(0, 0, 0, 0.1)"
            >
              一週間のスケジュール例
            </Box>
            <Img src="/calender.png" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
