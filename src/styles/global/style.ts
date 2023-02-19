import { defineStyleConfig, useColorMode } from "@chakra-ui/react";
import { Colors } from "../colors/index";

export const BodyConfigStyle = defineStyleConfig({
    baseStyle: {
        boxSizing: "border-box",
        m: 0,
        p: 0,
        w: "full",
        minH: "100vh",
        fontFamily: "poppins",
    },
});
