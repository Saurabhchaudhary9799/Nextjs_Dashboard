"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Header = () => {
  const pathname = usePathname();
  return (
    <section className="header-section  md:relative   md:z-50 ">
      <div className="container hidden md:flex  justify-between  py-5 px-10 md:absolute md:inset text-white  mx-auto gap-x-5 ">
        <div className="w-4/6 lg:w-5/6 flex justify-between items-center   ">
          {pathname === "/" && (
            <h1 className="hidden lg:block  text-xl">DASHBOARD</h1>
          )}
          {pathname === "/icons" && (
            <h1 className="hidden lg:block text-xl">ICONS</h1>
          )}
          {pathname === "/maps" && (
            <h1 className=" hidden lg:block text-xl">MAPS</h1>
          )}
          {pathname === "/profile" && (
            <h1 className=" hidden lg:block text-xl">USER PROFILE</h1>
          )}
          {pathname === "/tables" && (
            <h1 className=" hidden lg:block text-xl">TABLES</h1>
          )}
          <div className=" flex  justify-center items-center   border border-white rounded-3xl ">
            <div className="flex justify-center items-center py-3 px-2 rounded-l-3xl border-none">
              <span className="text-xl ">
                <IoSearchOutline />
              </span>
            </div>

            <input
              className="border-none bg-transparent py-3 w-48 lg:w-80 text-xl rounded-r-3xl  pl-3"
              type="search"
              placeholder="search"
            />
          </div>
        </div>
        <div className="w-2/6 lg:w-1/6 flex justify-center items-center  gap-x-2 ">
          <span className="text-4xl">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </span>
          <h1 className="text-xl ">Jessica Jones</h1>
        </div>
      </div>
      <div className="flex md:hidden text-black justify-between items-center px-10 py-3">
        <div>
          <span className="text-gray-500 text-3xl">
            <IoMenu />
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Brand</h1>
        </div>
        <div className="flex text-3xl gap-x-3">
          <div className="flex justify-center items-center">
            <span>
              <MdNotifications />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
