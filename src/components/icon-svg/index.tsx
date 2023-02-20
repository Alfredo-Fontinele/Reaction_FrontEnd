import { Image, ImageProps } from "@chakra-ui/react";

interface IIconSvg extends ImageProps {
    icon: string;
}

export const IconSvg = ({ icon, ...rest }: IIconSvg) => {
    return <Image src={icon} {...rest} />;
};
