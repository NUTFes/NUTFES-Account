import { ChakraProvider, Button,Input,Center,Box,Text,FormControl,FormLabel,Spacer,Flex } from '@chakra-ui/react';
import * as React from 'react';
// import theme from '@assets/theme';
import { Image } from '@chakra-ui/react';

class PulldownButton extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <Center>
        <Box border='1px' borderColor='Black' borderRadius='8px' w='400px' h='480px' p='3%' mt='84px'>
            <Center>
            <Box  mt='5%'>
              <Image boxSize='100px' src='/images/icon1.png' />
            </Box>
            </Center>

          <Box>
            <Text fontSize='25px'>
              ログイン
            </Text>
            <FormControl mt='5%'>
              <FormLabel htmlFor='email-adress' fontSize='15px'>メールアドレス</FormLabel>
              <Input id='email' borderColor='#0A89FF' w='full' h='30px' />
            </FormControl>
            <FormControl mt='5%'>
              <FormLabel htmlFor='password'  fontSize='15px'>パスワード</FormLabel>
              <Input id='password' borderColor='#0A89FF' w='full' h='30px' />
            </FormControl>
          </Box>

          <Flex mt='10%'>
            <Button color='#0A89FF' background='#FFFFFF' w='150px' h='40px'>アカウント作成</Button>
            <Spacer></Spacer>
            <Button color='white' background='#0A89FF' w='100px' h='40px'>ログイン</Button>
          </Flex>

        </Box>
        </Center>
      </ChakraProvider>
    );
  }
}

export default PulldownButton;