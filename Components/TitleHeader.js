import React from 'react'
import { Flex, Spacer, Text , Divider, Button} from '@chakra-ui/react'

const TitleHeader = () => {
    return (
        <>
        <Flex alignItems={"center"}>
                <Text fontSize='5xl' color="white" fontWeight={'bold'}>Explore</Text>
            <Spacer />

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
        </Flex>

        <Divider orientation='horizontal' color={'blue.300'} />
        </>
    )
}

export default TitleHeader;