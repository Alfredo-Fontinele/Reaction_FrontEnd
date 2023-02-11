import { BoxProps, FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

export interface IVariantChakra extends React.PropsWithChildren {
    variant: string;
}

export interface IComponentChakra extends React.PropsWithChildren {}

export interface LinkItemProps {
    name: string;
    icon: IconType;
}

export interface NavItemProps extends FlexProps, PropsWithChildren {
    icon: IconType;
}

export interface IMobileCloseProps extends BoxProps {
    onClose: () => void;
}

export interface IMobileOpenProps extends FlexProps {
    onOpen: () => void;
}
