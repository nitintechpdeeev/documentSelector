import React, { useState } from "react";
import AvailableDocument, { SelectedDataType } from "./AvailableDocument";
import SelectedDocuments from "./SelectedDocuments";

const Document = () => {
  const [selectedData, setSelectedData] = useState<SelectedDataType[]>([]);

  return (
    <div className="w-full p-5 flex bg-gray-100 gap-3 min-h-screen">
      <AvailableDocument
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
      <SelectedDocuments
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
    </div>
  );
};

export default Document;
