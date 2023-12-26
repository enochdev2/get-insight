import { getServerSession } from "next-auth";
import Headers from "./Headers";
import { authOptions } from "@/lib/authOptions";

const Navbar = async () => {
  const session = (await getServerSession(authOptions)) as any;

  return (
    <div className="w-full relative overflow-x-hidden">
      <Headers session={session} />
    </div>
  );
};

export default Navbar;
