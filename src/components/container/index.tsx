import { Box, useStyleConfig } from "@chakra-ui/react";
import React from "react";

type IVariantType = "default" | "primary" | "secondary" | "transparent";

export interface IVariantChakra extends React.PropsWithChildren {
    variant: IVariantType;
}

export const ContainerComponent = ({ variant, children }: IVariantChakra) => {
    const styles = useStyleConfig("ContainerConfigStyle", { variant });
    return <Box __css={styles}>{children}</Box>;
};
