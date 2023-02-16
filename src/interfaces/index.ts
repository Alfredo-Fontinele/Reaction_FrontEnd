import { BoxProps, FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

export interface IComponentChakra extends React.PropsWithChildren {}

export interface ILinkItemProps {
    name: string;
    icon: IconType;
    href: string;
}

export interface NavItemProps extends FlexProps, PropsWithChildren {
    href: string;
    icon: IconType;
}

export interface IMobileCloseProps extends BoxProps {
    onClose: () => void;
}

export interface IMobileOpenProps extends FlexProps {
    onOpen: () => void;
}

export interface IItemMenuOptions {
    name: string;
    href: string;
}
