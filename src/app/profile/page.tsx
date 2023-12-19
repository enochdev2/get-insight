import ProfileDetail from "@/components/profileDetails";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  console.log(
    "🚀 ~ file: page.tsx:15 ~ Profile ~ session?.user?.role:",
    session
  );

  return (
    <section className="py-5">
      <div className="my-4 ">
        <ProfileDetail
         session={session} 
         />
      </div>
    </section>
  );
};

export default Profile;
