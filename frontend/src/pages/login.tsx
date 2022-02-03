// export default function login(){
//   return (
//     <h1>hi</h1>
//   )
// }
import { ChakraProvider, Button,Input,Center,Box,Text } from '@chakra-ui/react';
import * as React from 'react';

class PulldownButton extends React.Component {
  render() {
    return (
      <ChakraProvider>

        <Box bgColor="purple.100" m="1%" p="1%" w="80%" borderWidth="3px" borderRadius="xl">
        <Center>
        <Text m="10" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
          Stickee account
        </Text>
        </Center>
          <Center>
          <Input w='500px' h='50px' m="10"></Input>
            </Center>
            <Center>
            <Input w='500px' h='50px' m="10"></Input>
          </Center>
          <Center>
            <Button background='transparent' w='100px' h='10px' p='5' minWidth='0'>Sign In</Button>
            <Button background='transparent' w='100px' h='10px' p='5' minWidth='0'>Sgin Up</Button>
          </Center>
        </Box>
      </ChakraProvider>
    );
  }
}

export default PulldownButton;