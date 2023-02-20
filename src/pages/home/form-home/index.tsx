import {
    Button,
    FormControl,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputProps,
    InputRightAddon,
    useMediaQuery,
} from "@chakra-ui/react";
import { useAPINews } from "../../../context/useApiNews";
import { AiOutlineSearch } from "react-icons/ai";
import { KeyboardEventHandler, useEffect, useRef } from "react";
import { Colors } from "./../../../styles/colors/index";
import { toast } from "react-toastify";
import { PhoneIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";

interface IFormHomeProps extends InputProps {
    base: string;
    md: string;
}

interface IEventKeyboard {
    e: KeyboardEventHandler<HTMLInputElement>;
}

export const FormHome = ({ base, md, ...rest }: IFormHomeProps) => {
    const { searchNewsInApi, setNewsArticles, setIsLoading } = useAPINews();
    const [isBiggerThan768px] = useMediaQuery("(min-width: 768px)");
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: any) => {
        if (e.keyCode !== 13) return;
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
            zIndex={99}
            {...rest}
        >
            <InputGroup>
                <InputLeftElement
                    children={
                        <Search2Icon id={"search-button"} color="gray.300" />
                    }
                />
                <Input
                    ref={text}
                    type="search"
                    onKeyUp={handleSubmit}
                    placeholder="Pesquise por politics, world, all ..."
                    required
                    color={Colors.default}
                    bg={Colors.menuItem}
                    minW={270}
                />
            </InputGroup>
        </FormControl>
    );
};
