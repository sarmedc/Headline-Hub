import { useEffect } from "react";
import { BsMoonStars as Moon, BsSun as Sun } from "react-icons/bs";
import { IoNewspaperOutline as Newspaper } from "react-icons/io5";
import { useStateContext } from "../../context/NewsContext";

export const Header = () => {
  const { isDarkMode, setIsDarkMode } = useStateContext();

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (isDarkMode) {
      htmlElement?.classList.add("dark");
    } else {
      htmlElement?.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex row-auto items-center bg-[#e6e3d1] dark:bg-[#48473a] text-[#48473a] dark:text-[#cac7b6] h-12">
      <span className="text-2xl mr-2 ml-4">
        <Newspaper />
      </span>
      <div className="text-2xl flex-grow">Headline Hub</div>
      <span
        className="text-2xl mr-4 cursor-pointer p-2 rounded-full hover:bg-[rgb(0,0,0,0.1)]"
        onClick={handleDarkModeClick}
      >
        {isDarkMode ? <Sun /> : <Moon />}
      </span>
    </div>
  );
};
