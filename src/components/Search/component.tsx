import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export const Search: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="mx-10 w-1/3">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full h-10 px-3 rounded-full text-sm border border-[#7a7769]"
      />
    </div>
  );
};
