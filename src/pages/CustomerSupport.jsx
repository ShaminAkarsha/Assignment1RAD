import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import { FaMessage, FaPhone } from "react-icons/fa6";
import { BsEmojiWink } from "react-icons/bs";

export default function CustomerSupport() {
  return (
    <div className="min-h-screen">
      <div className="flex md:flex-row flex-col p-10 bg-slate-100 shadow-xl">
        <div className="md:w-1/2 sm:text-left text-center m-2 sm:m-10 ">
          <h2 className="font-sans text-4xl font-bold text-teal-800">
            Get in touch
          </h2>
          <p className="text-gray-700 font-mono">
            Want to get in touch? We'd love to here from you, Here's how you can
            reach us...
          </p>
        </div>
        <div className="lg:w-2/3 ">
          <img src="cusSup.png" />
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            marginTop: -8,
            width: 428,
            height: 362,
          },
        }}
        justifyContent={"center"}
        gap={9}
      >
        <Paper elevation={3}>
          <div className="flex flex-col text-center items-center gap-2 p-10">
            <div className="text-4xl">
              <FaPhone />
            </div>
            <div className="text-xl font-semibold">Talk to us</div>
            <p className="text-slate-500 mt-4">
              Sometimes you need a little help from your friend. Or a
              PocketMoney support rep. Don't worry...we're here for you.
            </p>
            <p className="text-cyan-600 font-bold mt-6">+71 340 0254</p>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className="flex flex-col text-center items-center gap-2 p-10">
            <div className="text-4xl">
              <FaMessage />
            </div>
            <div className="text-xl font-semibold">Send an inquiry</div>
            <p className="text-slate-500 mt-4">
              Direct any difficulties you encounter within our platform. Also
              the sugessions are always welcome 😉
            </p>
            <p className="text-cyan-600 font-bold mt-6">mailus@PocketMoney.lk</p>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
