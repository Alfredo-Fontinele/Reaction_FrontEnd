import { defineStyleConfig } from "@chakra-ui/react";

export const ContainerConfigStyle = defineStyleConfig({
    baseStyle: {
        w: "full",
        minH: "100vh",
        display: "flex",
        justifyContent: "center",
        maxW: "2000px",
        margin: "auto",
    },
    variants: {
        default: {
            bgColor: "#eaeaea",
        },
        primary: {
            bgColor: "rgb(20,30,40)",
        },
        secondary: {
            bgColor: "#333",
        },
    },
});
