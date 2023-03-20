import {
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Colors } from "../../../styles/colors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Error } from "../../../components/error";
import { PasswordField } from "../../components/password-field";
import { EditProfileSchema } from "./../../../schemas/editProfileSchema";
import { toast } from "react-toastify";
import { useAPINews } from "../../../context/useApiNews";
import * as S from "./style";

export const EditProfile = () => {
    const { setUserAdmin } = useAPINews();
    const onSubmitFormLogin = (data: any) => {
        const dataObject = Object.entries(data);
        let newData: any = {};
        dataObject.forEach((arr) => {
            const key: string = arr[0];
            const value = arr[1];
            if (key && value) {
                newData[key] = value;
            }
        });
        setUserAdmin(newData.name);
        toast.success("Profile updated successfully");
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(EditProfileSchema),
    });
    return (
        <>
            <Flex
                position={"fixed"}
                top={0}
                left={0}
                justifyContent={"center"}
                alignItems={"center"}
                w={"full"}
                minH={"100vh"}
                bg={`rgba(20,30,40,.5)`}
            >
                <S.EditProfile>
                    <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Text
                            color={Colors.slate}
                            fontSize={27}
                            whiteSpace={"nowrap"}
                            textOverflow={"ellipsis"}
                            overflow={"hidden"}
                        >
                            Edit Profile
                        </Text>
                        <HStack spacing="2" justify="center" flexWrap={"wrap"}>
                            <Link
                                style={{
                                    color: Colors.slate,
                                }}
                                to="/dashboard"
                            >
                                Voltar
                            </Link>
                        </HStack>
                    </Flex>
                    <form
                        onSubmit={handleSubmit(onSubmitFormLogin)}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 25,
                        }}
                    >
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input {...register("name")} />
                            </FormControl>
                            {errors.name && (
                                <Error text={errors.name.message} />
                            )}
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input {...register("email")} />
                            </FormControl>
                            {errors.email && (
                                <Error text={errors.email.message} />
                            )}
                            <PasswordField {...register("password")} />
                            {errors.password && (
                                <Error text={errors.password.message} />
                            )}
                        </Stack>
                        <Stack spacing="6">
                            <button
                                type="submit"
                                style={{
                                    padding: 10,
                                    borderRadius: 8,
                                    color: Colors.default,
                                    backgroundColor: Colors.slate,
                                }}
                            >
                                Save
                            </button>
                        </Stack>
                    </form>
                </S.EditProfile>
            </Flex>
        </>
    );
};
