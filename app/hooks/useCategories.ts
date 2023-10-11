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

export interface Category {
  name: string;
  href: string;
  icon: any;
  colors: {
    bg: string;
    bgHover: string;
    icon: string;
    colorText: string;
  };
  subCategories: string[];
}

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
        colorText: "text-lime-500",
      },
      subCategories: [],
    },
    {
      name: "Electronics",
      href: "/electronics",
      icon: FaMobile,
      colors: {
        bg: "bg-yellow-600",
        bgHover: "group-hover:bg-yellow-600",
        icon: "text-yellow-200",
        colorText: "text-yellow-600",
      },
      subCategories: [],
    },
    {
      name: "Collectibles and Art",
      href: "/collectibles-and-art",
      icon: FaPaintBrush,
      colors: {
        bg: "bg-orange-500",
        bgHover: "group-hover:bg-orange-600",
        icon: "text-orange-200",
        colorText: "text-orange-500",
      },
      subCategories: [],
    },
    {
      name: "Fashion",
      href: "/fashion",
      icon: FaTshirt,
      colors: {
        bg: "bg-green-500",
        bgHover: "group-hover:bg-green-600",
        icon: "text-green-200",
        colorText: "text-green-500",
      },
      subCategories: [],
    },
    {
      name: "Automotive",
      href: "/automotive",
      icon: FaCar,
      colors: {
        bg: "bg-indigo-500",
        bgHover: "group-hover:bg-indigo-600",
        icon: "text-indigo-100",
        colorText: "text-indigo-500",
      },
      subCategories: [],
    },
    {
      name: "Sports and Hobbies",
      href: "/sports-and-hobbies",
      icon: FaBicycle,
      colors: {
        bg: "bg-blue-500",
        bgHover: "group-hover:bg-blue-600",
        icon: "text-blue-200",
        colorText: "text-blue-500",
      },
      subCategories: [],
    },
    {
      name: "Health and Beauty",
      href: "/health-and-beauty",
      icon: FaHeart,
      colors: {
        bg: "bg-yellow-500",
        bgHover: "group-hover:bg-yellow-600",
        icon: "text-yellow-200",
        colorText: "text-yellow-500",
      },
      subCategories: [],
    },
    {
      name: "Music and Education",
      href: "/music-and-education",
      icon: FaMusic,
      colors: {
        bg: "bg-purple-500",
        bgHover: "group-hover:bg-purple-600",
        icon: "text-purple-200",
        colorText: "text-purple-500",
      },
      subCategories: [],
    },
  ];

  return categories;
};

export default useCategories;
