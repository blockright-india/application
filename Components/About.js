import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
  Box
} from '@chakra-ui/react';



export default function About() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
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
      <Stack spacing={4}>
        <Heading color="white" >About us</Heading>
        <Text color={'white'} fontSize={'sm'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore,  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore , Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </Text>

        <Text color={'white'} fontSize={'sm'} mb={20}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore,  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore , Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </Text>

          <Button
            size='md'
            height='48px'
            width='200px'
            border='1px'
            bg={'darkBlue.100'}
            color={'blue.100'}
            borderColor='blue.500'
          >
            View all mercs
          </Button>
      </Stack>

    </SimpleGrid>
  );
}