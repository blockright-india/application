import { Box, Container, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NftCard from "../Components/NftCard";

function Nfts() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key":
          "l0yeoaFVI3gtnwHARzSKGgMIi1O5eVkXQPlpLwpZ7mOByd4kDvmvFGmCDCIR3H5q",
      },
    };

    fetch(
      "https://deep-index.moralis.io/api/v2/0xC1a2036c68C707c1B929607D3F6A0f330A893846/nft?chain=eth&format=decimal",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setNfts(response.result);
      })
      .catch((err) => console.error(err));
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
          NFT's
        </Text>

       <Box display={"flex"} flexWrap="wrap">
       {nfts?.map((nft) => {
          const metaData = JSON.parse(nft.metadata);
            console.log(nft);
          if (metaData !== null) {
            return (
              <NftCard
                imageSrc={metaData?.image}
                name={nft.name}
                symbol={nft.symbol}
                tokenId={nft.token_id}
                contractType={nft.contract_type}
                contractAddress={nft.token_address}
              />
            );
          }
        })}
       </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Nfts;
