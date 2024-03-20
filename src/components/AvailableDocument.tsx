import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import Accordion from "./Accordion";
import SearchBar from "./SearchBar";
import { X } from "tabler-icons-react";

export interface SelectedDataType {
  id: number;
  title: string;
}
export interface AvailableDataType {
  id: string;
  heading: string;
  subHeading: SelectedDataType[];
}

export interface FilterKeyType {
  job_templates: string[];
  locations: string[];
  seniority: string[];
  subsidiary: string[];
}

const AvailableDocument = ({
  selectedData,
  setSelectedData,
}: {
  selectedData: SelectedDataType[];
  setSelectedData: ([]) => void;
}) => {
  const jobTemplateOptions = ["Electricians", "Developers"];
  const seniorityOptions = ["Manager", "Team Manager"];
  const locationOptions = ["New York,NY", "Cobb,CA"];
  const subsidiaryOptions = ["Subsidiary"];
  const data = [
    {
      id: "1",
      heading: "Drug Policies",
      subHeading: [
        { id: 1, title: "Alabama-Drug Policies" },
        { id: 2, title: "California-Drug Policies" },
        { id: 3, title: "Colorado-Drug Policies" },
        { id: 4, title: "Florida-Drug Policies" },
        { id: 5, title: "Illinois-Drug Policies" },
        { id: 6, title: "Kansas-Drug Policies" },
        { id: 7, title: "New York-Drug Policies" },
        { id: 8, title: "Utah-Drug Policies" },
      ],
    },
    {
      id: "2",
      heading: "Employee Handbooks",
      subHeading: [
        { id: 1, title: "Alabama-Employee Handbooks" },
        { id: 2, title: "California-Employee Handbooks" },
        { id: 3, title: "Colorado-Employee Handbooks" },
        { id: 4, title: "Florida-Employee Handbooks" },
        { id: 5, title: "Illinois-Employee Handbooks" },
        { id: 6, title: "Kansas-Employee Handbooks" },
        { id: 7, title: "New York-Employee Handbooks" },
        { id: 8, title: "Utah-Employee Handbooks" },
      ],
    },
    {
      id: "3",
      heading: "Equipment Selection",
      subHeading: [
        { id: 1, title: "Alabama-Equipment Selection" },
        { id: 2, title: "California-Equipment Selection" },
        { id: 3, title: "Colorado-Equipment Selection" },
        { id: 4, title: "Florida-Equipment Selection" },
        { id: 5, title: "Illinois-Equipment Selection" },
        { id: 6, title: "Kansas-Equipment Selection" },
        { id: 7, title: "New York-Equipment Selection" },
        { id: 8, title: "Utah-Equipment Selection" },
      ],
    },
    {
      id: "4",
      heading: "Non-Compete-Agreement",
      subHeading: [
        { id: 1, title: "Alabama-Non-Compete-Agreement" },
        { id: 2, title: "California-Non-Compete-Agreement" },
        { id: 3, title: "Colorado-Non-Compete-Agreement" },
        { id: 4, title: "Florida-Non-Compete-Agreement" },
        { id: 5, title: "Illinois-Non-Compete-Agreement" },
        { id: 6, title: "Kansas-Non-Compete-Agreement" },
        { id: 7, title: "New York-Non-Compete-Agreement" },
        { id: 8, title: "Utah-Non-Compete-Agreement" },
      ],
    },
    {
      id: "5",
      heading: "Payroll Handbook",
      subHeading: [
        { id: 1, title: "Alabama-Payroll Handbook" },
        { id: 2, title: "California-Payroll Handbook" },
        { id: 3, title: "Colorado-Payroll Handbook" },
        { id: 4, title: "Florida-Payroll Handbook" },
        { id: 5, title: "Illinois-Payroll Handbook" },
        { id: 6, title: "Kansas-Payroll Handbook" },
        { id: 7, title: "New York-Payroll Handbook" },
        { id: 8, title: "Utah-Payroll Handbook" },
      ],
    },
  ];
  const initialFilterState = {
    job_templates: [],
    locations: [],
    seniority: [],
    subsidiary: [],
  };

  const [filterKeys, setFilterKeys] =
    useState<FilterKeyType>(initialFilterState);
  const [inputValue, setInputValue] = useState<string>("");
  const [availableData, setAvailableData] = useState(data);

  const handleSelectAll = (e: BaseSyntheticEvent) => {
    if (e.target.checked) {
      const val = availableData.map(
        (item: AvailableDataType) => item.subHeading
      );
      const data = val.flat();
      setSelectedData(data);
    } else {
      setSelectedData([]);
    }
  };

  useEffect(() => {
    if (inputValue == "") {
      setAvailableData(data);
    } else {
      const filteredData = data.filter((item: AvailableDataType) =>
        item.heading.toLowerCase().includes(inputValue.toLowerCase())
      );
      setAvailableData(filteredData);
    }
  }, [inputValue]);

  const handleRemoveFilterKey = (item: string, key: string) => {
    setFilterKeys((prevState) => ({
      ...prevState,
      [item]: prevState[item as keyof FilterKeyType].includes(key)
        ? prevState[item as keyof FilterKeyType].filter(
            (item: any) => item !== key
          )
        : [...prevState[item as keyof FilterKeyType], key],
    }));
  };

  const getKeyColor = (item: string) => {
    switch (item) {
      case "locations":
        return { bg: "#E1EFFE", text: "#3F83F8" };
        break;
      case "job_templates":
        return { bg: "#EDEBFE", text: "#9061F9" };
        break;
      case "seniority":
        return { bg: "#DEF7EC", text: "#0E9F6E" };
        break;
      case "subsidiary":
        return { bg: "#F8994238", text: "#F9A61A" };
        break;
    }
  };
  return (
    <div className="w-full min-h-full p-4 rounded-md bg-white">
      <SearchBar
        title="Available"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="mb-2 text-sm">Filter by:</div>
      <div className=" grid gap-3 mb-6">
        <div className="flex gap-3">
          <div className="w-1/2">
            <CustomSelect
              title="Job Templates"
              name="job_templates"
              options={jobTemplateOptions}
              filterKeys={filterKeys}
              setFilterKeys={setFilterKeys}
            />
          </div>
          <div className="w-1/2">
            <CustomSelect
              title="Locations"
              name="locations"
              options={locationOptions}
              filterKeys={filterKeys}
              setFilterKeys={setFilterKeys}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-1/2">
            <CustomSelect
              title="Subsidiary"
              name="subsidiary"
              options={subsidiaryOptions}
              filterKeys={filterKeys}
              setFilterKeys={setFilterKeys}
            />
          </div>
          <div className="w-1/2">
            <CustomSelect
              title="Seniority"
              name="seniority"
              options={seniorityOptions}
              filterKeys={filterKeys}
              setFilterKeys={setFilterKeys}
            />
          </div>
        </div>
      </div>
      {Object.values(filterKeys).flat().length > 0 && (
        <div className="border-grey-400 rounded-md p-2 mb-3 flex border-[1px] gap-2 w-full flex-wrap">
          {Object.keys(filterKeys).map((item) => {
            let color = getKeyColor(item);
            return filterKeys[item as keyof FilterKeyType].map((key, index) => (
              <span
                key={index}
                style={{ backgroundColor: color?.bg }}
                className=" flex w-fit  px-3 rounded-lg justify-left  items-center gap-1.5"
              >
                <span style={{ color: color?.text }}>{key}</span>
                <span
                  className="mt-0.5"
                  onClick={() => handleRemoveFilterKey(item, key)}
                >
                  <X size={13} strokeWidth={4} color={`${color?.text}`} />
                </span>
              </span>
            ));
          })}
        </div>
      )}

      <div className="">
        <div className="flex gap-10 justify-between w-full mb-4">
          <div className="text-sm">
            {availableData.length} Available Documents
          </div>
          <div className="flex">
            <div>
              <label className="switch">
                <input type="checkbox" onChange={(e) => handleSelectAll(e)} />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="ml-2 text-base">Select All</div>
          </div>
        </div>
        <div className="h-auto rounded-md border-[1px] border-red-500 overflow-hidden">
          <Accordion
            availableData={availableData}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
        </div>
      </div>
    </div>
  );
};

export default AvailableDocument;
