import LinkWithIcon from "./LinkWithIcon";

interface ProfileButtonOptionProps {
  href: string;
  text: string;
  icon: any;
}

const ProfileButtonOption: React.FC<ProfileButtonOptionProps> = ({
  href,
  text,
  icon,
}) => {
  return (
    <div className="flex cursor-pointer justify-start border-b-2 border-gray-100 bg-white p-3 font-light outline-none transition-all hover:bg-boxit-primary hover:font-bold">
      <LinkWithIcon href={href} icon={icon} text={text} hover={false} />
    </div>
  );
};

export default ProfileButtonOption;
