import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Box,
  Stack,
  
} from '@chakra-ui/react';
import Accordian from './Accordian';


export default function Faq() {
  return (
    <Container maxW={'7xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={'6rem'}>
        <Stack spacing={4}>

          <Heading color="white">Frequently Aksed Questions</Heading>
          <div style={{marginTop: 30}}> 
          <Accordian />
          <Accordian />
          <Accordian />
          <Accordian />
          </div>

        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}