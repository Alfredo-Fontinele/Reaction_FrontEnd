import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Logo } from "../components/logo";
import { Link } from "react-router-dom";
import { OAuthButtonGroup } from "../components/q-auth-button-group";
import { PasswordField } from "../components/password-field";
import { Colors } from "../../styles/colors";
import { Header } from "./../home/header/index";
import { useAPINews } from "../../context/useApiNews";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../schemas/loginSchema";
import { Error } from "../../components/error";
import { toast } from "react-toastify";

const DB = [
    {
        email: "neto@gmail.com",
        password: 1234,
        name: "Alfredo",
    },
];

export const Login = () => {
    const { navigate } = useAPINews();
    document.title = "Login";

    const onSubmitFormLogin = (data: any) => {
        const existUser = DB.find((user) => user.email === data.email);
        if (existUser) {
            toast.success(`Show. Manda Bala ${existUser.name}`);
            navigate("/dashboard");
            return;
        }
        toast.error("Ops. Usuário não encontrado");
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    return (
        <>
            <Header />
            <Container
                maxW="lg"
                py={{ base: "12", md: "24" }}
                px={{ base: "0", sm: "8" }}
            >
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Logo />
                        <Stack
                            spacing={{ base: "2", md: "3" }}
                            textAlign="center"
                        >
                            <Heading size={{ base: "xs", md: "sm" }}>
                                Log in to your account
                            </Heading>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">
                                    Don't have an account?
                                </Text>
                                <Link to="/register">Sign Up</Link>
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
                            onSubmit={handleSubmit(onSubmitFormLogin)}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 15,
                            }}
                        >
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" {...register("email")} />
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
                                <Checkbox defaultChecked>Remember me</Checkbox>
                                <Button
                                    variant="link"
                                    colorScheme="blue"
                                    size="sm"
                                >
                                    Forgot password?
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <button type="submit">Sign in</button>
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
                </Stack>
            </Container>
        </>
    );
};
