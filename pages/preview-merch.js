import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function PreviewMerch() {
  const [nft, setNft] = useState();
  const [licensePrice, setLicensePrice] = useState(10);
  const [quantity, setQuantity] = useState(0);
  const [earning, setEarning] = useState(0);
  const [commision, setCommision] = useState(0)

  const getSelectedNft = () => {
    const selected = JSON.parse(localStorage.getItem("selectedNft"));

    setNft(selected);
  };

  const handleNext = () => {};

  useEffect(() => {
    getSelectedNft();
  }, []);

  return (
    <Box bg="brand.100">
      <Navbar />
      <Container maxW={"7xl"} bg="white">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign={"center"}
        >
          Mint NFT merch in real life
        </Text>

        <Flex>
          <Box flex={"1"} padding="20">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Tshirt
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  License Price
                  <Input placeholder="$10 per piece" value={"$10 per piece"} />
                  Quantity
                  <Input placeholder="units" type="number" onChange={(e) => {
                    setQuantity(e.target.value);
                    setEarning(e.target.value * licensePrice);
                    setCommision(e.target.value * licensePrice * 10 / 100)
                  }} />
                  ${earning} earning
                  from license royality
                  <Flex>
                    <Checkbox />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Hoodies
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>form</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Jackets
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>form</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Hats
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>form</AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Box padding={"5"}>
              <h1>License Royality: ${earning}</h1>
              <h1>Our commision: ${commision}</h1>
              <h1>Estimated earning: ${earning - commision}</h1>
            </Box>

            <Button onClick={handleNext}>Next</Button>
          </Box>

          {nft && (
            <Box margin={"1"} padding="10">
              <img src={`${nft.imageSrc}`} width={250} height={250} />
              <h3>
                {nft.name} #{nft.tokenId}
              </h3>
              <Tooltip label={nft.contractAddress}>
                <p>{nft.contractType}</p>
              </Tooltip>
              <p>SYM: {nft.symbol}</p>
              <p></p>
            </Box>
          )}
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
}

export default PreviewMerch;
