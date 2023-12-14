
import { getServerSession } from "next-auth";
import Headers from "./Headers";
import { authOptions } from "@/lib/authOptions";


const Navbar = () => {
    const session = getServerSession(authOptions) as any;



  return (
    <div>
      <Headers session={session}/>
    </div>
  )
}

export default Navbar
