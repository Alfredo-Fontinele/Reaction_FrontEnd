import { Button, FormControl, Input } from "@chakra-ui/react";
import { useAPI } from "../../../context/useApi";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { Colors } from "./../../../styles/colors/index";
import { toast } from "react-toastify";

interface IFormHomeProps {
    base: string;
    md: string;
}

export const FormHome = ({ base, md }: IFormHomeProps) => {
    const { searchNewsInApi, setNewsArticles, setIsLoading } = useAPI();
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async () => {
        if (!text.current?.value) {
            toast.error("Insira sua pesquisa");
            return;
        }
        setIsLoading(true);
        const textSubmit = text.current?.value;
        const resultData = await searchNewsInApi(textSubmit);
        setNewsArticles(resultData);
        setIsLoading(false);
    };

    useEffect(() => {
        setNewsArticles([]);
    }, [text]);

    return (
        <FormControl
            display={{ base: base, md: md }}
            gap={2}
            justifyContent="flex-start"
            w={"full"}
        >
            <Input
                ref={text}
                type="search"
                placeholder="Pesquise por politics, world, all ..."
                required
                color={Colors.default}
                bg={Colors.menuItem}
                minW={270}
                maxW={400}
            />
            <Button
                p={"1rem"}
                fontSize={25}
                color={Colors.default}
                backgroundColor={Colors.blueLight}
                onClick={handleSubmit}
                _hover={{
                    color: Colors.black,
                    backgroundColor: Colors.default,
                }}
            >
                <AiOutlineSearch />
            </Button>
        </FormControl>
    );
};
