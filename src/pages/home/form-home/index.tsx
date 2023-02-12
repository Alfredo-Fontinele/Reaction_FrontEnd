import { Button, FormControl, Input, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAPI } from "../../../../context/useApi";

export const FormHome = () => {
    const [isSmallerThan1100px] = useMediaQuery("(min-width: 1100px)");
    const { searchNewsInApi, setNewsArticles } = useAPI();
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async () => {
        const textSubmit = text.current!.value;
        const resultData = await searchNewsInApi(textSubmit);
        setNewsArticles(resultData);
    };

    useEffect(() => {
        setNewsArticles([]);
    }, [text]);

    return (
        <FormControl display={{ base: "none", md: "flex" }} gap={2}>
            <Input
                ref={text}
                type="text"
                placeholder="Digite sua pesquisa"
                required
                maxW={400}
                color={"#eaeaea"}
            />
            <Button
                p={"1rem"}
                fontSize={25}
                color={"#eaeaea"}
                backgroundColor={"rgb(29, 109, 238)"}
                onClick={handleSubmit}
                _hover={{
                    color: "#000",

                    backgroundColor: "#eaeaea",
                }}
            >
                <AiOutlineSearch />
            </Button>
        </FormControl>
    );
};
