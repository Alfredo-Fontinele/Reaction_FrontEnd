import { Flex, Text } from "@chakra-ui/react";
import { Colors } from "../../styles/colors";
import { Link } from "react-router-dom";

export const NotFound = () => {
    document.title = "Not Found";
    return (
        <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            minH="100vh"
            gap={10}
            bg={Colors.dark}
        >
            <Text fontSize={"4xl"} color={Colors.default}>
                Page Not Found
            </Text>
            <Link to={"/"}>Voltar à Home</Link>
        </Flex>
    );
};
