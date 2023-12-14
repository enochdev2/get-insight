
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Headers from "./Headers";


const Navbar = () => {
    const session = getServerSession(authOptions) as any;



  return (
    <div>
      <Headers/>
    </div>
  )
}

export default Navbar
