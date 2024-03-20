import React, { BaseSyntheticEvent } from "react";
import { Search } from "tabler-icons-react";

const SearchBar = ({
  title,
  inputValue,
  setInputValue,
}: {
  title: string;
  inputValue: string;
  setInputValue: (value: string) => void;
}) => {
  const handleOnChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <>
      <div className="mb-2">{title} Documents</div>
      <div className="flex h-auto w-auto relative mb-4">
        <div className="absolute top-3 left-3">
          <Search size={20} strokeWidth={2} color={"gray"} />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleOnChange(e)}
          placeholder="Search"
          className="w-full border p-2 flex border-grey-400 bg-white rounded-lg pl-10"
        />
      </div>
    </>
  );
};

export default SearchBar;
