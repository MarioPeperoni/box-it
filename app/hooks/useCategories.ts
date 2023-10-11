import {
  FaHome,
  FaMobile,
  FaPaintBrush,
  FaTshirt,
  FaCar,
  FaBicycle,
  FaHeart,
  FaMusic,
} from "react-icons/fa";

const useCategories = () => {
  const categories = [
    {
      name: "Home and Garden",
      href: "/home-and-garden",
      icon: FaHome,
      colors: {
        bg: "bg-lime-500",
        bgHover: "group-hover:bg-lime-600",
        icon: "text-lime-100",
      },
    },
    {
      name: "Electronics",
      href: "/electronics",
      icon: FaMobile,
      colors: {
        bg: "bg-yellow-600",
        bgHover: "group-hover:bg-yellow-600",
        icon: "text-yellow-200",
      },
    },
    {
      name: "Collectibles and Art",
      href: "/collectibles-and-art",
      icon: FaPaintBrush,
      colors: {
        bg: "bg-orange-500",
        bgHover: "group-hover:bg-orange-600",
        icon: "text-orange-200",
      },
    },
    {
      name: "Fashion",
      href: "/fashion",
      icon: FaTshirt,
      colors: {
        bg: "bg-green-500",
        bgHover: "group-hover:bg-green-600",
        icon: "text-green-200",
      },
    },
    {
      name: "Automotive",
      href: "/automotive",
      icon: FaCar,
      colors: {
        bg: "bg-indigo-500",
        bgHover: "group-hover:bg-indigo-600",
        icon: "text-indigo-100",
      },
    },
    {
      name: "Sports and Hobbies",
      href: "/sports-and-hobbies",
      icon: FaBicycle,
      colors: {
        bg: "bg-blue-500",
        bgHover: "group-hover:bg-blue-600",
        icon: "text-blue-200",
      },
    },
    {
      name: "Health and Beauty",
      href: "/health-and-beauty",
      icon: FaHeart,
      colors: {
        bg: "bg-yellow-500",
        bgHover: "group-hover:bg-yellow-600",
        icon: "text-yellow-200",
      },
    },
    {
      name: "Music and Education",
      href: "/music-and-education",
      icon: FaMusic,
      colors: {
        bg: "bg-purple-500",
        bgHover: "group-hover:bg-purple-600",
        icon: "text-purple-200",
      },
    },
  ];

  return categories;
};

export default useCategories;
