import { Box, Container, Text, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function PreviewMerch() {
  const [nft, setNft] = useState();

  const getSelectedNft = () => {
    const selected = JSON.parse(localStorage.getItem("selectedNft"));

    setNft(selected);
  };

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

        {nft && (
          <Box margin={"1"}>
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
      </Container>
      <Footer />
    </Box>
  );
}

export default PreviewMerch;
