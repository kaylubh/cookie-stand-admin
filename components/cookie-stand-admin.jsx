// API interface
import useResource from "@/hooks/useResource";
// components
import CreateForm from "@/components/create-form";
import ReportTable from "@/components/report-table";

function CookieStandAdmin() {
  const { resources, createResource, deleteResource } = useResource();

  return (
    <div className="flex flex-col gap-4 my-6">
      <CreateForm onCreate={createResource} />
      <ReportTable
        cookieStandsData={resources || []}
        onDelete={deleteResource}
      />
    </div>
  );
}

export default CookieStandAdmin;
