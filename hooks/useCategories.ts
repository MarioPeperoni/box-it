import Category from "@/types/Category";
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
  const categories: Category[] = [
    {
      name: "Home and Garden",
      icon: FaHome,
      colors: {
        bgLight: "bg-lime-100",
        icon: "text-lime-500",
      },
      subCategories: [],
    },
    {
      name: "Electronics",
      icon: FaMobile,
      colors: {
        bgLight: "bg-yellow-100",
        icon: "text-yellow-600",
      },
      subCategories: [],
    },
    {
      name: "Collectibles and Art",
      icon: FaPaintBrush,
      colors: {
        bgLight: "bg-orange-100",
        icon: "text-orange-500",
      },
      subCategories: [],
    },
    {
      name: "Fashion",
      icon: FaTshirt,
      colors: {
        bgLight: "bg-green-100",
        icon: "text-green-500",
      },
      subCategories: [],
    },
    {
      name: "Automotive",
      icon: FaCar,
      colors: {
        bgLight: "bg-indigo-100",
        icon: "text-indigo-500",
      },
      subCategories: [],
    },
    {
      name: "Sports and Hobbies",
      icon: FaBicycle,
      colors: {
        bgLight: "bg-blue-100",
        icon: "text-blue-500",
      },
      subCategories: [],
    },
    {
      name: "Health and Beauty",
      icon: FaHeart,
      colors: {
        bgLight: "bg-yellow-100",
        icon: "text-yellow-500",
      },
      subCategories: [],
    },
    {
      name: "Music and Education",
      icon: FaMusic,
      colors: {
        bgLight: "bg-purple-100",
        icon: "text-purple-500",
      },
      subCategories: [],
    },
  ];

  return categories;
};

export default useCategories;
