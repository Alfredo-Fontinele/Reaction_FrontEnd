import { Flex, Text } from "@chakra-ui/react";

interface IError {
    text: any;
}

export const Error = ({ text }: IError) => {
    return (
        <Flex justifyContent={"flex-start"} alignItems={"center"}>
            <Text textAlign={"center"}>{text}</Text>
        </Flex>
    );
};
