import { Box, useColorMode, useStyleConfig } from "@chakra-ui/react";
import { IComponentChakra } from "../../interfaces";
import { Colors } from "./../colors/index";

export const GlobalStyle = ({ children }: IComponentChakra) => {
    const { colorMode } = useColorMode();
    const styles = useStyleConfig("BodyConfigStyle");
    return (
        <Box
            __css={styles}
            bg={colorMode === "dark" ? Colors.menuItem : Colors.default}
        >
            {children}
        </Box>
    );
};
