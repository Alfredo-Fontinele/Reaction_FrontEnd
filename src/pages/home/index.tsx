import { Flex, useDisclosure } from "@chakra-ui/react";
import { useAPI } from "../../../context/useApi";
import { Loading } from "../../components/loading";
import { ListNews } from "./list-news";
import { Header } from "./header";
import { ContainerComponent } from "./../../components/container/index";
import { FormHome } from "./form-home";

export const Home = () => {
    const { onOpen } = useDisclosure();
    const { isLoading, setIsLoading } = useAPI();
    return (
        <Flex flexDir={"column"}>
            <Header onOpen={onOpen} />
            <Flex
                bg="rgb(10, 20, 30)"
                p={"5rem 2rem"}
                justifyContent={"center"}
                alignItems="center"
                display={{ base: "flex", md: "none" }}
            >
                <FormHome base="flex" md="none" />
            </Flex>
            {isLoading && <Loading />}
            <ContainerComponent variant="default">
                <ListNews />
            </ContainerComponent>
        </Flex>
    );
};
