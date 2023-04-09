import { IoNewspaperOutline } from "react-icons/io5";

export const Header = () => (
  <div className="flex row-auto items-center bg-[#e6e3d1] text-[#48473a] h-12">
    <span className="text-2xl mr-2 ml-4">
      <IoNewspaperOutline />
    </span>
    <div className="text-2xl">Headline Hub</div>
  </div>
);
