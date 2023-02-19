import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import { Logo } from "../components/logo";
import { Link } from "react-router-dom";
import { OAuthButtonGroup } from "../components/q-auth-button-group";
import { PasswordField } from "../components/password-field";
import { Header } from "./../home/header/index";
import { useAPINews } from "../../context/useApiNews";
import { RegisterSchema } from "../../schemas/registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error } from "../../components/error";
import { toast } from "react-toastify";
import { Colors } from "../../styles/colors";
import { IconSvg } from "../../components/icon-svg/index";
import svg from "../../../src/assets/girl-make-register.svg";

export const Register = () => {
    const { colorMode } = useColorMode();
    const { navigate } = useAPINews();
    document.title = "Register";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(RegisterSchema),
    });

    const onSubmitFormRegister = (data: any) => {
        toast.success(`Usuário registrado com sucesso`);
        navigate("/login");
    };

    return (
        <>
            <Header />
            <Container
                w={"full"}
                maxW="8xl"
                py={{ base: 12 }}
                minH={"90vh"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Flex
                    gap={50}
                    w="full"
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Flex flexDir={"column"}>
                        <Stack spacing="6">
                            <Stack spacing="6" textAlign="center" p={6}>
                                <Heading size={"2xl"} color={Colors.main}>
                                    Register your account
                                </Heading>
                                <HStack spacing="1" justify="center">
                                    <Text color="muted">
                                        Don't have an account?
                                    </Text>
                                    <Link
                                        style={{
                                            borderBottom: `1px solid ${Colors.main}`,
                                            color: Colors.main,
                                        }}
                                        to="/login"
                                    >
                                        Sign In
                                    </Link>
                                </HStack>
                            </Stack>
                        </Stack>
                        <Box
                            py={{ base: "0", sm: "8" }}
                            px={{ base: "4", sm: "10" }}
                            bg={{ base: "transparent", sm: "bg-surface" }}
                            boxShadow={{ base: "none", sm: "md" }}
                            borderRadius={{ base: "none", sm: "xl" }}
                        >
                            <form
                                onSubmit={handleSubmit(onSubmitFormRegister)}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 15,
                                }}
                            >
                                <Stack spacing="5">
                                    <FormControl>
                                        <FormLabel htmlFor="email">
                                            Name
                                        </FormLabel>
                                        <Input
                                            id="name"
                                            type="text"
                                            {...register("name")}
                                        />
                                    </FormControl>
                                    {errors.name && (
                                        <Error text={errors.name.message} />
                                    )}
                                    <FormControl>
                                        <FormLabel htmlFor="email">
                                            Email
                                        </FormLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            {...register("email")}
                                        />
                                    </FormControl>
                                    {errors.email && (
                                        <Error text={errors.email.message} />
                                    )}
                                    <PasswordField {...register("password")} />
                                    {errors.password && (
                                        <Error text={errors.password.message} />
                                    )}
                                </Stack>
                                <HStack justify="space-between">
                                    <Checkbox defaultChecked>
                                        Remember me
                                    </Checkbox>
                                    <Button
                                        variant="link"
                                        colorScheme="blue"
                                        size="sm"
                                    >
                                        Forgot password?
                                    </Button>
                                </HStack>
                                <Stack spacing="6">
                                    <button
                                        type="submit"
                                        style={{
                                            padding: 10,
                                            borderRadius: 8,
                                            color: Colors.default,
                                            backgroundColor: Colors.main,
                                        }}
                                    >
                                        Sign Up
                                    </button>
                                    <HStack>
                                        <Divider />
                                        <Text
                                            fontSize="sm"
                                            whiteSpace="nowrap"
                                            color="muted"
                                        >
                                            or continue with
                                        </Text>
                                        <Divider />
                                    </HStack>
                                    <OAuthButtonGroup />
                                </Stack>
                            </form>
                        </Box>
                    </Flex>
                    <IconSvg
                        icon={svg}
                        display={{ base: "none", xl: "flex" }}
                    />
                </Flex>
            </Container>
        </>
    );
};
