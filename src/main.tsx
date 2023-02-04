import { ContainerConfigStyle } from './components/container/style'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BodyConfigStyle } from './styles/global/style'
import { GlobalStyle } from './styles/global/index'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import React from 'react'

const theme = extendTheme({
  components: {
    ContainerConfigStyle,
    BodyConfigStyle
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
