import React, { useState } from "react";
import "./Accordion.css";
import { ArrowRight } from "tabler-icons-react";
import { AvailableDataType, SelectedDataType } from "./AvailableDocument";

const AccordionItem = ({
  data,
  selectedData,
  setSelectedData,
}: {
  data: AvailableDataType;
  selectedData: SelectedDataType[];
  setSelectedData: ([]) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectData = (item: SelectedDataType) => {
    setSelectedData([...selectedData, item]);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{data.heading}</div>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}></div>
      </div>
      {isOpen && (
        <>
          {data.subHeading.map((item, index) => (
            <div key={index} className="accordion-content flex justify-between">
              <span>{item.title}</span>
              <div
                className="border-[1px] border-[#E5E7EB] rounded flex justify-center items-center h-6 w-6"
                onClick={() => {
                  handleSelectData(item);
                }}
              >
                <ArrowRight size={20} color="black" />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

const Accordion = ({
  availableData,
  selectedData,
  setSelectedData,
}: {
  availableData: AvailableDataType[];
  selectedData: SelectedDataType[];
  setSelectedData: ([]) => void;
}) => {
  return (
    <div className="accordion">
      {availableData.map((item: AvailableDataType, index: number) => (
        <AccordionItem
          key={index}
          data={item}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
        />
      ))}
    </div>
  );
};

export default Accordion;
