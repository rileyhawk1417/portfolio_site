"use client";
import React, { useState } from "react";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Home } from "lucide-react";
const links = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={menuState}
      onMenuOpenChange={setMenuState}
    >
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarMenuToggle
          aria-label={menuState ? "Close Menu" : "Open Menu"}
          className="hidden sm:flex"
        />
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand className="flex flex-row justify-start">
          <Home />
          <span className="pl-4 pr-4"></span>
          <p className="font-bold text-inherit">Home</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden flex gap-4" justify="center">
        {links.map((value: any, idx: number) => (
          <NavbarItem key={idx}>
            <Link href={value.href}>{value.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="hidden sm:flex">
        {links.map((value: any, idx: number) => (
          <NavbarMenuItem key={idx}>
            <Link href={value.href}>{value.label}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
