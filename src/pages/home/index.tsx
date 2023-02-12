import { Flex, useDisclosure } from "@chakra-ui/react";
import { Header } from "./header";
import { ListNews } from "./list-news";

export const Home = () => {
    const { onOpen } = useDisclosure();
    return (
        <Flex flexDir={"column"}>
            <Header onOpen={onOpen} />
            <ListNews />
        </Flex>
    );
};
