import { RiNewspaperFill } from "react-icons/ri";
import { Colors } from "../../../styles/colors";
import { Flex, Text } from "@chakra-ui/react";

interface ITitleHeaderProps {
    title: string;
}

export const TitleHeader = ({ title }: ITitleHeaderProps) => {
    return (
        <Flex gap={3} justifyContent={"center"} alignItems={"center"}>
            <RiNewspaperFill
                style={{
                    fontSize: 35,
                    color: Colors.slate,
                }}
            />
            <Text
                display={{ base: "1rem", md: "flex" }}
                fontSize={{ base: "1xl", md: "2xl" }}
                fontWeight={"500"}
                color={Colors.default}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
            >
                {title}
            </Text>
        </Flex>
    );
};
