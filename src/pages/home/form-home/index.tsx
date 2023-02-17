import { Button, FormControl, Input, useMediaQuery } from "@chakra-ui/react";
import { useAPINews } from "../../../context/useApiNews";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { Colors } from "./../../../styles/colors/index";
import { toast } from "react-toastify";

interface IFormHomeProps {
    base: string;
    md: string;
}

export const FormHome = ({ base, md }: IFormHomeProps) => {
    const { searchNewsInApi, setNewsArticles, setIsLoading } = useAPINews();
    const [isBiggerThan768px] = useMediaQuery("(min-width: 768px)");
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
            justifyContent={isBiggerThan768px ? "flex-start" : "center"}
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
                maxW={isBiggerThan768px ? 400 : 500}
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
