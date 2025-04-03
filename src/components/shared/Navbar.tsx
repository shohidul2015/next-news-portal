"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "@/components/ui/button";
//import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-2 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-24">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href={"/"}>Daily News</Link>
        </div>

        {/* desktop menu*/}

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink
                href="/news"
                className={`${
                  pathname === "/news" ? "text-blue-500 font-semibold" : ""
                } hover:text-blue-500`}
              >
                News
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-blue-500 font-semibold" : ""
                } hover:text-blue-500`}
              >
                Contact
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/services"
                className={`${
                  pathname === "/services" ? "text-blue-500 font-semibold" : ""
                } hover:text-blue-500`}
              >
                <NavigationMenuTrigger className="hover:text-blue-500">
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-sm rounded-md px-4 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink href="/services/web">
                        Web Developments
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/apps">
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/seo">
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/about"
                className={`${
                  pathname === "/about" ? "text-blue-500 font-semibold" : ""
                } hover:text-blue-500`}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button*/}

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">login</Button>
        </div>
        {/*mobile hamburger menu */}
        <div className="lg:hidden">
          <Button onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
