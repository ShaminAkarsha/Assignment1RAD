import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  return (
    <Navbar className='bg-green-100' fluid rounded>
      <Navbar.Brand href="/">
        <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PocketMoney</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link onClick={()=> navigate("/")} className='cursor-pointer' >
          Home
        </Navbar.Link>
        <Navbar.Link onClick={()=> navigate("/jobs")} className='cursor-pointer'>jobs</Navbar.Link>
        <Navbar.Link onClick={()=> navigate("/about")} className='cursor-pointer'>About</Navbar.Link>
        <Navbar.Link onClick={()=> navigate("/cust-support")} className='cursor-pointer'>Customer Support</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
