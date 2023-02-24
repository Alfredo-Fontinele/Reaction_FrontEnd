import * as yup from "yup";

export const EditProfileSchema = yup.object({
    email: yup.string().notRequired().email(),
    name: yup
        .string()
        .required("the minimum mandatory field is the name field"),
    password: yup.string().notRequired(),
});
