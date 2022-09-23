import { Box, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function NftCard({ imageSrc, name, tokenId, contractType, symbol, contractAddress, key }) {
    const router = useRouter()

    const handleSelect = () => {
        const selectedNft = {
            name,
            imageSrc,
            tokenId,
            contractType,
            contractAddress,
            symbol
        };

        localStorage.setItem("selectedNft", JSON.stringify(selectedNft));

        router.push("/preview-merch")
    }

  return (
    <Box margin={"1"} onClick={handleSelect} key={key}>
      <img src={`${imageSrc}`} width={150} height={150}  />
      <h3>{name} #{tokenId}</h3>
      <Tooltip label={contractAddress}>
      <p>{contractType}</p>
      </Tooltip>
      <p>SYM: {symbol}</p>
      <p></p>
    </Box>
  );
}

export default NftCard;
