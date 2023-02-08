import React from "react";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

let userSchema = yup.object({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
  email: yup.string().email("invaild email").required("required"),
  contact: yup
    .string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
  const handleSubmit = (values) => {
    console.log("yes", values);
  };
  return (
    <Box m="20px">
        <Header heading='form' text='sign in'/>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                type="text"
                label="last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                variant="filled"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <TextField
                type="email"
                label="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                variant="filled"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                type="text"
                label="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                variant="filled"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />
              <TextField
                type="text"
                label="address1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                variant="filled"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
              />
              <TextField
                type="text"
                label="address2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                variant="filled"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
