import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function SignIn() {
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
          >
            <div className="flex flex-col gap-4">
              <TextField
                id="username"
                label="User name"
                variant="outlined"
                type="text"
                required={true}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                required={true}
              />
              <div className="flex flex-col">
                <span>Password</span>
                <TextField
                  id="password"
                  placeholder="****"
                  variant="standard"
                  type="password"
                  required={true}
                />
                <span className="mt-3">Re-type password</span>
                <TextField
                  id="retype-password"
                  placeholder="****"
                  variant="standard"
                  type="password"
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
