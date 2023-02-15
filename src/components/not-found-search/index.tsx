import { Image } from "@chakra-ui/react";

const otherImage =
    "https://www.irossi.com.br/rossi/assets/images/illustration/man-searching-at.svg";

export const NotFoundSearch = () => {
    return (
        <Image
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            margin={"auto"}
            w={600}
            h={400}
            src={otherImage}
        />
    );
};
