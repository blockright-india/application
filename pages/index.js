import { Container, Text, SimpleGrid, Stack, Box} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import ProductCard from '../Components/Card'
import Card from '../Components/Card'
import Faq from '../Components/Faq'
import FeatureCard from '../Components/FeatureCard'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import TitleHeader from '../Components/TitleHeader'
import styles from '../styles/Home.module.css'

const featureData = [
  {
    id: 1,
    title: 'thetimes',
    text: "lorem ipsum dollar sit",
    _image: 'https://www.thetimes.co.uk/environment/climate-change'
  },
  {
    id: 2,
    title: 'thetimes',
    text: "lorem ipsum dollar sit",
    _image: 'https://www.thetimes.co.uk/environment/climate-change'
  },
  {
    id: 3,
    title: 'thetimes',
    text: "lorem ipsum dollar sit",
    _image: 'https://www.thetimes.co.uk/environment/climate-change'
  }
]


export default function Home() {
  return (
    <Box bg="brand.100">
      <Navbar />
      <Container maxW={'7xl'}>
        <Header />
        <TitleHeader />
        <About />

        {/* features  */}

        <Box mt={'6rem'}>
          <Text fontSize="5xl" align="center" fontWeight={'bold'} color="white">We Pride our best Service</Text>

          <SimpleGrid columns={3}>
            {featureData.map((item, index) => {
              return (
                <FeatureCard />
              )
            })}
          </SimpleGrid>
        </Box>

        <Faq/>

        {/* end  */}


        {/* <Card/> */}

        <NewsLetter/>
      </Container>
      <Footer />
    </Box>
  )
}
