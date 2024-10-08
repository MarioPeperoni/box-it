import getUser from "@/helpers/getUser";

import ProfileSideMenu from "@/components/profile/ProfileSideMenu";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  return (
    <div className="flex flex-col gap-6 bg-orange-100 p-8 md:p-16">
      <h1 className="text-3xl font-bold tracking-wide">{`${user?.username}'s profile`}</h1>
      <div className="flex flex-col justify-evenly bg-white md:flex-row">
        <ProfileSideMenu />
        <div className="flex h-full flex-grow p-4">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
