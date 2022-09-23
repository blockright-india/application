import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function FeatureCard(props) {
    return (
      <Center py={6} key={props.key}>
        <Box
          maxW={'360px'}
          w={'full'}
          bg={'darkBlue.100'}
          boxShadow={'2xl'}
          border='1px' 
          borderColor='gray.200'
          rounded={'lg'}
          p={6}
          mt={30}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            mb={4}
            
          />
          <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
            Lindsey James
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4} >
            @lindsey_jam3s
          </Text>
          <Text
            textAlign={'center'}
            color={'white'}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text>
        </Box>
      </Center>
    );
  }