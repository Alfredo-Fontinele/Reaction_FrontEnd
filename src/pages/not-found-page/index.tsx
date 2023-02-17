import { Flex, Button, Text } from "@chakra-ui/react";
import { useAPINews } from "../../context/useApiNews";
import { Colors } from "../../styles/colors";

export const NotFound = () => {
    const { navigate } = useAPINews();
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
            <Button onClick={() => navigate("/")}>Voltar à Home</Button>
        </Flex>
    );
};
