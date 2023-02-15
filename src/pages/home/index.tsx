import { ContainerComponent } from "./../../components/container/index";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { Loading } from "../../components/loading";
import { useAPI } from "../../context/useApi";
import { ListNews } from "./list-news";
import { FormHome } from "./form-home";
import { Header } from "./header";

export const Home = () => {
    const { onOpen } = useDisclosure();
    const { isLoading } = useAPI();
    return (
        <Flex flexDir={"column"}>
            <Header onOpen={onOpen} />
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
            <ContainerComponent variant="transparent">
                <ListNews />
            </ContainerComponent>
        </Flex>
    );
};
