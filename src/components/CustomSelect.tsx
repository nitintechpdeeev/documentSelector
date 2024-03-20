import React, { BaseSyntheticEvent } from "react";
import { FilterKeyType } from "./AvailableDocument";

const CustomSelect = ({
  title,
  name,
  options,
  filterKeys,
  setFilterKeys,
}: {
  title: string;
  name: string;
  options: string[];
  filterKeys: FilterKeyType;
  setFilterKeys: React.Dispatch<React.SetStateAction<FilterKeyType>>;
}) => {
  const handleChange = (e: BaseSyntheticEvent, name: string) => {
    const { value } = e.target;
    if (value !== "") {
      setFilterKeys((prevState) => ({
        ...prevState,
        [name]: prevState[name as keyof FilterKeyType].includes(value)
          ? prevState[name as keyof FilterKeyType]
          : [...prevState[name as keyof FilterKeyType], value],
      }));
    }
  };
  return (
    <div className="w-full">
      <select
        onClick={(e) => handleChange(e, name)}
        className="bg-[white] p-3 border-[1.5px] rounded pr-20 py-2 w-full text-sm"
      >
        <option value="">{title}</option>
        {options.map((item: string, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
