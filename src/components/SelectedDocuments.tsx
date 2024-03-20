import React, { useEffect, useState } from "react";
import { Check, X } from "tabler-icons-react";
import SearchBar from "./SearchBar";
import { SelectedDataType } from "./AvailableDocument";

const SelectedDocuments = ({
  selectedData,
  setSelectedData,
}: {
  selectedData: SelectedDataType[];
  setSelectedData: ([]) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<SelectedDataType[]>(selectedData);

  useEffect(() => {
    setData(selectedData);
  }, [selectedData]);

  useEffect(() => {
    if (inputValue == "") {
      setData(selectedData);
    } else {
      const filteredData = selectedData.filter((item: SelectedDataType) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setData(filteredData);
    }
  }, [inputValue]);

  const handleDelete = (item: SelectedDataType) => {
    const updatedData = selectedData.filter(
      (data: SelectedDataType) => data.title !== item.title
    );
    setSelectedData(updatedData);
  };

  const selectedDocumentsList = (
    <div className="border-[1px] border-green-300 rounded-lg p-4 bg-white-100 gap-3 pb-0">
      {data.map((item: SelectedDataType, index: number) => (
        <div key={index} className="flex justify-between min-w-full mb-5">
          <div className="flex items-center">
            <Check size={20} color="#0E9F6E" strokeWidth={2} />
            <div className="ml-2">{item.title}</div>
          </div>
          <div
            onClick={() => handleDelete(item)}
            className="border-[1px] border-[#E5E7EB] rounded flex justify-center items-center h-6 w-6"
          >
            <X size={15} color="black" />
          </div>
        </div>
      ))}
    </div>
  );

  const suggestionBox = (
    <div className="border-0 min-h-custom border-gray-300 rounded-lg bg-[#f9fafb]">
      <div className="w-full flex justify-center pt-[40px] pb-[24px]">
        <svg
          width="57"
          height="64"
          viewBox="0 0 57 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.875 32C56.875 34.25 55.125 36 53 36H14.625L27.75 49.25C29.375 50.75
                 29.375 53.375 27.75 54.875C27 55.625 26 56 25 56C23.875 56 22.875 55.625 
                 22.125 54.875L2.125 34.875C0.5 33.375 0.5 30.75 2.125 29.25L22.125 9.25C23.625
                  7.625 26.25 7.625 27.75 9.25C29.375 10.75 29.375 13.375 27.75 14.875L14.625 
                  28H53C55.125 28 56.875 29.875 56.875 32Z"
            fill="#D1D5DB"
          />
        </svg>
      </div>
      <div className="w-full text-center text-[#D9D9D9]">
        Select documents from the left panel to have employees review <br />
        them and provide a signature acknowledging review
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-full p-4 bg-white rounded-md">
      <SearchBar
        title="Selected"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {data.length ? selectedDocumentsList : suggestionBox}
    </div>
  );
};

export default SelectedDocuments;
