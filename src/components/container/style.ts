import { defineStyleConfig } from "@chakra-ui/react";
import { Colors } from "./../../styles/colors/index";

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
        transparent: {
            bgColor: "transparent",
        },
        default: {
            bgColor: Colors.default,
        },
        primary: {
            bgColor: Colors.menuItem,
        },
        secondary: {
            bgColor: Colors.gray1,
        },
    },
});
