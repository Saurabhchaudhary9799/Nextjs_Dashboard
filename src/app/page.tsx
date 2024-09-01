// import Stats from "@/components/Stats"
// import {Charts} from "@/components/Charts"
// import {Performance} from "@/components/Performance"
// import {PageVisits} from "@/components/PageVisits"
// import {SocialTraffic} from "@/components/SocialTraffic"
// import Image from "next/image";
// import Footer from "@/components/Footer"

// export default function Home() {
//   return (
//      <>
//       <Stats/>
//       <div className="px-20 bg-[#f8f9fe] relative ">
//         <div className="grid grid-cols-3  gap-5 absolute -top-[150px] right-[50px] left-[50px] ">
//            <div className="col-span-2  "><Charts/></div>
//            <div className="col-span-1 "><Performance/></div>
//            <div className="col-span-2"><PageVisits/></div>
//            <div className="col-span-1 "><SocialTraffic/></div>
//         </div>
//       </div>
//       <Footer/>
//      </>
//   );
// }


import Stats from "@/components/Stats"
import { Charts } from "@/components/Charts"
import { Performance } from "@/components/Performance"
import { PageVisits } from "@/components/PageVisits"
import { SocialTraffic } from "@/components/SocialTraffic"
import Footer from "@/components/Footer"
// absolute -top-[150px] right-[50px] left-[50px]
export default function Home() {
  return (
    <>
      <Stats />
      <div className="px-10  py-10 ">
        {/* Adjust padding at the bottom to make room for the grid */}
        <div  >
          <div className="grid grid-cols-3 gap-5 ">
            <div className="col-span-2"><Charts /></div>
            <div className="col-span-1"><Performance /></div>
            <div className="col-span-2"><PageVisits /></div>
            <div className="col-span-1"><SocialTraffic /></div>
          </div>
        </div>
      </div>
      {/* Footer now positioned below the grid */}
     
    </>
  );
}