import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { FaArrowUp } from "react-icons/fa";
  import { FaArrowDown } from "react-icons/fa";
  const page_visits = [
    {
      pagename : "/argon/",
      visitors: "4,569",
      uniqueUsers: "340",
      bounceRate: "46,53%",
      type:"up"
    },
    {
        pagename : "/argon/index.html",
        visitors: "3,985",
        uniqueUsers: "319",
        bounceRate: "46,53%",
        type:"down"
      },
      {
        pagename : "/argon/charts.html",
        visitors: "3,513",
        uniqueUsers: "294",
        bounceRate: "36,49%",
        type:"down"
      },
      {
        pagename : "/argon/tables.html",
        visitors: "2,050",
        uniqueUsers: "147",
        bounceRate: "50.87%",
         type:"up"
      },
      {
        pagename : "/argon/profile.html",
        visitors: "1,795",
        uniqueUsers: "190",
        bounceRate: "46,53%",
         type:"down"
      },

  ]
  
  
  
  export function PageVisits() {
    return (
     <section className="page-visits px-10 border rounded-xl py-5">
      <div className="flex justify-between border-b-2 pb-4">
        <h1 className="text-xl font-medium">Page Visits</h1>
        <button className="py-2 px-3 bg-[#5e72e4] text-white rounded-xl text-xl">See all</button>
      </div>
   
      <Table>
        
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className=" ">PAGE NAME</TableHead>
            <TableHead className=" ">VISITORS</TableHead>
            <TableHead  className=" ">UNIQUE USERS</TableHead>
            <TableHead className="  ">BOUNCE RATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {page_visits.map((item) => (
            <TableRow key={item.pagename} className="text-lg" >
              <TableCell >{item.pagename}</TableCell>
              <TableCell>{item.visitors}</TableCell>
              <TableCell>{item.uniqueUsers}</TableCell>
              <TableCell className="flex justify-center items-center gap-x-3">{item.type === 'up' ? <span className="text-green-500"><FaArrowUp/></span> : <span className="text-red-500"><FaArrowDown/></span>}{item.bounceRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      </section>
    )
  }
  