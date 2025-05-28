import { BiSolidCategory } from "react-icons/bi";
import { FaHeart, FaUserFriends } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import Navlink from "./Navlink";
import Logo from "../defaults/Logo";
const NAV_LINKS = [
  {
    label: "Home",
    link: "/",
    icon: <GoHomeFill />,
  },
  {
    label: "Category",
    link: "/category",
    icon: <BiSolidCategory />,
  },
  {
    label: "Wishlist",
    link: "/wishlist",
    icon: <FaHeart />,
  },
  {
    label: "Friends",
    link: "/friends",
    icon: <FaUserFriends />,
  },
];
const Sidebar = () => {
  return (
   <div className="col-span-2">
     <div className="py-10 px-10 h-screen sticky inset-0 bg-black/50">
      <Logo />
      <ul>
        {NAV_LINKS.map((navlink, index) => <Navlink key={index} navlink={navlink} />)}
      </ul>
    </div>
   </div>
  );
};

export default Sidebar;
