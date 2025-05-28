import { Input } from "@/components/ui/input";
import { SearchCodeIcon, SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="flex justify-between items-center w-full rounded-2xl border border-input md:w-[40%] bg-[#333] px-5 py-2">
      <Input className="w-[80%]" />
      <SearchIcon />
    </div>
  );
};

export default Search;
