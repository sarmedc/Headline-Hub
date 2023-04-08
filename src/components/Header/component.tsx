import { IoNewspaperOutline } from "react-icons/io5";

export const Header = () => (
  <div className="flex row-auto items-center bg-slate-300 h-12">
    <span className="text-2xl">
      <IoNewspaperOutline />
    </span>
    <div className="text-2xl">Headline Hub</div>
  </div>
);
