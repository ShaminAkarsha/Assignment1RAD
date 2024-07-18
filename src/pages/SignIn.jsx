import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      retypedpassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .min(2, "Too Short!")
        .max(20, "Only allowed 20 characters!"),
      email: Yup.string().required("Required").email("Invalid email address"),
      password: Yup.string().required("Required").min(5, "Too short"),
      retypedpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Required"),
    }),
    onSubmit: (values) => console.log(values),
  });
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('signinBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* left side */}
        <div className="flex-1 p-5">
          <Link to="/" className="font-bold text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">
              Sign
            </span>
            Up
          </Link>
          <p className="text-sm mt-5 font-sans font-semibold text-gray-600">
            You need an account to work with us, You can sign with your email
            and password or with google.
          </p>
        </div>
        <div className="flex-1 bg-white bg-opacity-90 p-10 rounded-md">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "auto" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col gap-4">
              <TextField
                id="username"
                name="username"
                label="User name"
                variant="outlined"
                type="text"
                error={
                  formik.touched.username && formik.errors.username
                    ? true
                    : false
                }
                helperText={
                  formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : null
                }
                required={true}
                {...formik.getFieldProps("username")}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
                required={true}
                {...formik.getFieldProps("email")}
              />
              <div className="flex flex-col">
                <span>Password</span>
                <TextField
                  id="password"
                  name="password"
                  placeholder="****"
                  variant="standard"
                  error={
                    formik.touched.password && formik.errors.password
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : null
                  }
                  type="password"
                  required={true}
                  {...formik.getFieldProps("password")}
                />
                <span className="mt-3">Re-type password</span>
                <TextField
                  id="retypedpassword"
                  name="retypedpassword"
                  placeholder="****"
                  variant="standard"
                  error={
                    formik.touched.retypedpassword &&
                    formik.errors.retypedpassword
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.retypedpassword &&
                    formik.errors.retypedpassword
                      ? formik.errors.retypedpassword
                      : null
                  }
                  type="password"
                  {...formik.getFieldProps("retypedpassword")}
                />
              </div>
            </div>
            <Button variant="outlined" type="submit">
              Sign In
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
