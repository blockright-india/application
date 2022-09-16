import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,Text} from '@chakra-ui/react'
import React from 'react'

export default function Accordian() {
  return (
    <Accordion allowMultiple mb={4}>
  <AccordionItem border={'none'}  bg={'darkBlue.100'} borderRadius={10} mb={0}>
    <h2>
      <AccordionButton _expanded={{ bg: 'darkBlue.100', color: 'blue.100' }}>
        <Box flex='1' textAlign='left'>
          <Text color={'white'}>Section 1 title</Text>
        </Box>
        <AccordionIcon color={'blue.100'}/>
      </AccordionButton>
    </h2>
    <AccordionPanel color="white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  )
}