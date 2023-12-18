import * as yup from "yup";

const contactSchema = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default contactSchema;
