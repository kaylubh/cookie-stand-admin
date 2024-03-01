// react
import { useState } from "react";
// components
import CreateForm from "@/components/create-form";
import ReportTable from "@/components/report-table";

function CookieStandAdmin({ updateStandCount }) {
  const [cookieStands, setCookieStands] = useState([]);

  function handleCreate(cookieStandData) {
    setCookieStands([...cookieStands, cookieStandData]);
    updateStandCount(cookieStands.length + 1);
  }

  return (
    <div className="flex flex-col gap-4 my-6">
      <CreateForm onCreate={handleCreate} />
      <ReportTable cookieStandsData={cookieStands} />
    </div>
  );
}

export default CookieStandAdmin;
