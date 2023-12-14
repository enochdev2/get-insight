import ProfileDetail from "@/components/profileDetails";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

const Profile = async () => {
  const session  = await getServerSession(authOptions);

  return (
    <div>
      <ProfileDetail session={session} />
    </div>
  );
};

export default Profile;
