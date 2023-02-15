import { ContainerConfigStyle } from "./components/container/style";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BodyConfigStyle } from "./styles/global/style";
import { GlobalStyle } from "./styles/global/index";
import { ApiProvider } from "./../context/useApi";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App";
import React from "react";

const theme = extendTheme({
    components: {
        ContainerConfigStyle,
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
                        <App />
                    </ApiProvider>
                </GlobalStyle>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
