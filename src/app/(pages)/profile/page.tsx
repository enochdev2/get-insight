import ProfileDetail from "@/components/profileDetails";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  

  return (
    <section className="py-5">
      <div className="my-20 ">
        <ProfileDetail
         session={session} 
         />
      </div>
    </section>
  );
};

export default Profile;
