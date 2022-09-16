import { ChakraProvider , extendTheme} from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#000",
    },
    blue:{
      100: "#3671FE"
    },
    darkBlue: {
      100: '#13285b'
    }
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
