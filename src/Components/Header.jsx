import React from "react";
import { Button, Navbar } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { useTheme } from "../Components/ThemeContext";
import { FaMoon } from "react-icons/fa6";

export default function Header() {
  const path = useLocation();
  const navigate = useNavigate();
  const {theme, toggleTheme } = useTheme();
  return (
    <Navbar className="bg-green-100 dark:bg-green-800" fluid rounded>
      <Navbar.Brand href="/">
        <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PocketMoney
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3">
        <Button className="w-12 h-10 hidden sm:inline-block dark:text-black" color="gray" pill
        onClick={toggleTheme}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        <Button
          className="bg-gradient-to-r from-purple-500 to-pink-500"
          outline
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active={path.pathname === "/"}
          onClick={() => navigate("/")}
          className="cursor-pointer"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          active={path.pathname === "/jobs"}
          onClick={() => navigate("/jobs")}
          className="cursor-pointer"
        >
          jobs
        </Navbar.Link>
        <Navbar.Link
          active={path.pathname === "/about"}
          onClick={() => navigate("/about")}
          className="cursor-pointer"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          active={path.pathname === "/cust-support"}
          onClick={() => navigate("/cust-support")}
          className="cursor-pointer"
        >
          Customer Support
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
