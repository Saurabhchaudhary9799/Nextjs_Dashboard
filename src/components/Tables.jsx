"use client";

import Image from "next/image";
import argon_design from "../../public/argon_design.jpg";
import angular from "../../public/angular.jpg";
import black_dashboard from "../../public/black_dashboard.jpg";
import react from "../../public/react.jpg";
import vue from "../../public/vue.jpg";
import team_1 from "../../public/team-1.jpg";
import team_2 from "../../public/team-2.jpg";
import team_3 from "../../public/team-3.jpg";
import team_4 from "../../public/team-4.jpg";
import { Progress } from "@/components/ui/progress";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const invoices = [
  {
    project: "Argon Design System",
    projectLogo: argon_design,
    budget: 2500,
    status: "completed",
    users: [team_1, team_2, team_3, team_4],
    completion: 60,
  },
  {
    project: "Angular Now UI Kit PRO",
    projectLogo: angular,
    budget: 1800,
    status: "pending",
    users: [team_1, team_2, team_3, team_4],
    completion: 100,
  },
  {
    project: "Black Dashboard",
    projectLogo: black_dashboard,
    budget: 3150,
    status: "completed",
    users: [team_1, team_2, team_3, team_4],
    completion: 72,
  },
  {
    project: "React Material Dashboard",
    projectLogo: react,
    budget: 4400,
    status: "completed",
    users: [team_1, team_2, team_3, team_4],
    completion: 90,
  },
  {
    project: "Vue Paper UI Kit PRO",
    projectLogo: react,
    budget: 2200,
    status: "completed",
    users: [team_1, team_2, team_3, team_4],
    completion: 100,
  },
];

export function Tables() {
  return (
    <div className="border px-10 py-5 flex flex-col gap-y-10">
      <div className="border rounded-xl bg-[#fff]">
        <div className="py-10 pl-5 text-xl font-meduim border-b-2">
          <h1>Card Tables</h1>
        </div>
        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead>PROJECT</TableHead>
              <TableHead>BUDGET</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>USERS</TableHead>
              <TableHead>COMPLETION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center ">
                    <Image
                      src={invoice.projectLogo}
                      alt={invoice.project}
                      width={30}
                      height={30}
                      className="mr-2 w-16 h-16 rounded-[50%] border"
                    />
                    <span className="font-bold  text-[#525f7f]">
                      {invoice.project}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="">{`$${invoice.budget} USD`}</TableCell>
                <TableCell className="  ">{invoice.status}</TableCell>
                <TableCell>
                  <div className="flex  ">
                    {invoice.users.map((user, index) => (
                      <Image
                        key={index}
                        src={user}
                        alt={`User ${index + 1}`}
                        width={30}
                        height={30}
                        className="-mr-2 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="  ">
                  {`${invoice.completion}%`}{" "}
                  <Progress value={invoice.completion} />
                </TableCell>
                <TableCell className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BsThreeDotsVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 ">

                      
                      <DropdownMenuItem className="text-lg">Action</DropdownMenuItem>
                      <DropdownMenuItem className="text-lg">Another action</DropdownMenuItem>
                      <DropdownMenuItem className="text-lg"> Something else here</DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="py-10 pl-5 text-xl font-meduim border-t-2 flex justify-end">
          <Pagination className="flex justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <div className=" rounded-xl bg-[#172b4d] text-white">
        <div className="py-10 pl-5 text-xl font-meduim custom-border rounded-t-xl">
          <h1>Card Tables</h1>
        </div>
        <Table className="text-lg ">
          <TableHeader>
            <TableRow className="custom-border">
              <TableHead>PROJECT</TableHead>
              <TableHead>BUDGET</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>USERS</TableHead>
              <TableHead>COMPLETION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, i) => (
              <TableRow key={i} className="items-center custom-border">
                <TableCell>
                  <div className="flex items-center">
                    <Image
                      src={invoice.projectLogo}
                      alt={invoice.project}
                      width={30}
                      height={30}
                      className="mr-2 w-16 h-16 rounded-[50%] border"
                    />
                    <span className="font-bold  ">{invoice.project}</span>
                  </div>
                </TableCell>
                <TableCell>{`$${invoice.budget} USD`}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>
                  <div className="flex">
                    {invoice.users.map((user, index) => (
                      <Image
                        key={index}
                        src={user}
                        alt={`User ${index + 1}`}
                        width={30}
                        height={30}
                        className="-mr-2 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="">
                  {`${invoice.completion}%`}{" "}
                  <Progress value={invoice.completion} />
                </TableCell>
                <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BsThreeDotsVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 ">

                      
                      <DropdownMenuItem className="text-lg">Action</DropdownMenuItem>
                      <DropdownMenuItem className="text-lg">Another action</DropdownMenuItem>
                      <DropdownMenuItem className="text-lg"> Something else here</DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
