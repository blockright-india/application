import { Box, Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { connectMeta, connectPhantom } from "../utils/WalletConnect";

function Wallet() {
    const router = useRouter()

    useEffect(() => {
        if(localStorage.getItem("address")){
            router.push("/nfts")
        }
    }, [])

  return (
    <Box bg="brand.100">
      <Navbar />
      <Container maxW={"7xl"} bg="white">
        <Button onClick={connectMeta}>
            MetaMask
        </Button>
        <Button onClick={connectPhantom}>
            Phantom
        </Button>
      </Container>
      <Footer />
    </Box>
  );
}

export default Wallet;
