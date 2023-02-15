import { Flex, Text } from "@chakra-ui/react";
import { RiNewspaperFill } from "react-icons/ri";
import { Colors } from "../../../styles/colors";

interface ITitleHeaderProps {
    title: string;
}

export const TitleHeader = ({ title }: ITitleHeaderProps) => {
    return (
        <Flex gap={3}>
            <RiNewspaperFill
                style={{
                    fontSize: 35,
                    color: Colors.default,
                }}
            />
            <Text
                display={{ base: "flex" }}
                fontSize="2xl"
                fontWeight={"500"}
                whiteSpace="nowrap"
                color={Colors.default}
            >
                {title}
            </Text>
        </Flex>
    );
};
