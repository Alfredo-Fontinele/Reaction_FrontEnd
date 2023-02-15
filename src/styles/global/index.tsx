import { Box, useStyleConfig } from "@chakra-ui/react";
import { IComponentChakra } from "../../interfaces";

export const GlobalStyle = ({ children }: IComponentChakra) => {
    const styles = useStyleConfig("BodyConfigStyle");
    return <Box __css={styles}>{children}</Box>;
};
