import { Container, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useAPINews } from "../../context/useApiNews";
import { Loading } from "../../components/loading";
import { ListNews } from "./list-news";
import { FormHome } from "./form-home";
import { Header } from "./header";

export const Home = () => {
    const { isLoading } = useAPINews();
    document.title = "Home";
    return (
        <Flex flexDir={"column"}>
            <Header type="header" />
            <Flex
                p={"1rem"}
                justifyContent={"center"}
                alignItems="center"
                flexDir={"column"}
                w="full"
                gap={5}
                display={{ base: "flex", md: "none" }}
            >
                <FormHome base="flex" md="none" />
            </Flex>
            {!!isLoading && <Loading />}
            <Container
                maxW="8xl"
                minH={"80vh"}
                display="flex"
                justifyContent="center"
                alignItems={"center"}
                gap={70}
            >
                <ListNews />
            </Container>
        </Flex>
    );
};
