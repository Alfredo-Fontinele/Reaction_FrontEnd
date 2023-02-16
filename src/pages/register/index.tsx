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
import { useAPI } from "../../context/useApi";

export const Register = () => {
    const { navigate } = useAPI();
    document.title = "Register";
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
                                Register your account
                            </Heading>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">
                                    Don't have an account?
                                </Text>
                                <Link to="/login">Sign in</Link>
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
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Name</FormLabel>
                                    <Input id="name" type="text" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" />
                                </FormControl>
                                <PasswordField />
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
                                <Button onClick={() => navigate("/login")}>
                                    Sign Up
                                </Button>
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
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </>
    );
};
