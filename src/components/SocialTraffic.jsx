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
  import { Progress } from "@/components/ui/progress"

  const social_traffic = [
    {
      referral : "Facebook",
      visitors: "4,569",
      
      bounceRate: "60%",
    },
    {
        referral : "Facebook",
        visitors: "5,480",
        
        bounceRate: "70%",
      },
      {
        referral : "Google",
        visitors: "4,807",
        
        bounceRate: "80%",
        
      },
      {
        referral : "Instagram",
        visitors: "3,678",
        
        bounceRate: "75%",
      },
      {
        referral : "twitter",
        visitors: "2,645",
        
        bounceRate: "30%",
      
      },

  ]
  
  export function SocialTraffic() {
    return (
     <section className="page-visits px-10 border rounded-xl py-5">
      <div className="flex justify-between border-b-2 pb-4">
        <h1 className="text-xl font-medium ">Social traffic</h1>
        <button className="py-2 px-3 bg-[#5e72e4] text-white rounded-xl text-xl">See all</button>
      </div>
   
      <Table>
        
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className=" ">REFERRAL</TableHead>
            <TableHead className=" ">VISITORS</TableHead>
            <TableHead  className=" ">ENGAGEMENT</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {social_traffic.map((item,index) => (
            <TableRow key={index} className="text-lg" >
              <TableCell >{item.referral}</TableCell>
              <TableCell>{item.visitors}</TableCell>
            
              <TableCell className="flex justify-center items-center gap-x-3" >{item.bounceRate}<Progress value={item.bounceRate} />
</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      </section>
    )
  }
  