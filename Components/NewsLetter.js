import React from 'react'
import { Text, Flex, Stack, Box, SimpleGrid, GridItem, FormControl, Input, InputRightElement, Button, InputGroup } from '@chakra-ui/react'

export default function NewsLetter() {
    return (
        <Stack p={10} bg="darkBlue.100" borderRadius={10} mt={'6rem'}>
            <Flex minWidth='max-content' justifyContent={"space-between"} alignItems='center' gap='2'>
                <Box>
                    <Text fontSize={'3xl'} fontWeight={'bold'} color="white">Newsletters</Text>
                    <Text fontWeight={"light"} fontSize="1rem" color="white">dummy text</Text>
                </Box>

                <Box>
                    <SimpleGrid>
                        <GridItem colSpan={1} width={{ md: 'lg', sm: 'sm' }}>
                            <form>
                                <FormControl boxShadow='2xl' borderRadius={50}>
                                    <InputGroup>
                                        <Input
                                            placeholder='Enter Email'
                                            borderRadius={50}
                                            _placeholder={{ opacity: 1, color: 'gray.500' }}
                                            size='lg'
                                            fontWeight={'light'}
                                            bg={'gray.50'}
                                            border='none'
                                            p={7}
                                            isRequired
                                        />
                                        <InputRightElement alignItems='center'>
                                            <Button
                                                height='48px'
                                                width='200px'
                                                border='1px'
                                                fontWeight={600}
                                                bg={'darkBlue.100'}
                                                color={'white'}
                                                borderColor='blue.500'
                                                href={'#'}
                                            // _hover={{
                                            //   bg: 'pink.300',
                                            // }} 
                                            >
                                                Connect Wallet
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </form>

                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Stack>
    )
}