import { Button, FormControl, Input } from "@chakra-ui/react";
import { useAPI } from "../../../../context/useApi";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef } from "react";

interface IFormHomeProps {
    base: string;
    md: string;
}

export const FormHome = ({ base, md }: IFormHomeProps) => {
    const { searchNewsInApi, setNewsArticles, setIsLoading } = useAPI();
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async () => {
        setIsLoading(true);
        const textSubmit = text.current!.value;
        const resultData = await searchNewsInApi(textSubmit);
        setNewsArticles(resultData);
        setIsLoading(false);
    };

    useEffect(() => {
        setNewsArticles([]);
    }, [text]);

    return (
        <FormControl display={{ base: base, md: md }} gap={2}>
            <Input
                ref={text}
                type="text"
                placeholder="Digite sua pesquisa"
                required
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
