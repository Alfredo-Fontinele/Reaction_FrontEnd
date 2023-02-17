import { LeftToRightAnime } from "../../animations/styled-components/leftToRight";
import { Flex, Text } from "@chakra-ui/react";
import { Colors } from "../../styles/colors";
import React from "react";

interface IError {
    text: any;
}

export const Error = ({ text }: IError) => {
    return (
        <Flex
            justifyContent={"flex-start"}
            alignItems={"center"}
            fontWeight={"bold"}
            color={Colors.default}
        >
            <Text textAlign={"center"}>{text}</Text>
        </Flex>
    );
};
