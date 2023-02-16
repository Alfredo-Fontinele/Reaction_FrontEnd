import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BodyConfigStyle } from "./styles/global/style";
import { GlobalStyle } from "./styles/global/index";
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiProvider } from "./context/useApi";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";

const theme = extendTheme({
    components: {
        BodyConfigStyle,
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <GlobalStyle>
                    <ApiProvider>
                        <ToastContainer />
                        <ColorModeScript
                            initialColorMode={theme.config.initialColorMode}
                        />
                        <App />
                    </ApiProvider>
                </GlobalStyle>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
