import { hours } from "@/data";

function ReportTable({ cookieStandsData, onDelete }) {
  if (cookieStandsData.length === 0) {
    return (
      <h2 className="text-center text-gray-900 text-xl">
        No Cookie Stands Available
      </h2>
    );
  }

  return (
    <table className="mx-auto bg-emerald-500 rounded-lg text-gray-900">
      <TableHeader />
      <tbody>
        {cookieStandsData.map((cookieStandData, index) => {
          return (
            <TableRow
              key={cookieStandData.id}
              cookieStandData={cookieStandData}
              onDelete={onDelete}
              rowIndex={index}
            />
          );
        })}
      </tbody>
      <TableFooter cookieStandsData={cookieStandsData} />
    </table>
  );
}

function TableHeader() {
  return (
    <thead>
      <tr className="border-b border-emerald-100 divide-x divide-emerald-100">
        <th className="p-2">Locations</th>
        {hours.map((hour) => {
          return (
            <th key={hour} className="p-2">
              {hour}
            </th>
          );
        })}
        <th className="p-2">Totals</th>
      </tr>
    </thead>
  );
}

function TableRow({ cookieStandData, onDelete, rowIndex }) {
  const total = cookieStandData.hourly_sales.reduce(
    (sum, sales) => sum + sales
  );

  function handleDelete() {
    onDelete(cookieStandData.id);
  }

  return (
    <tr
      className={`${
        rowIndex % 2 ? "bg-emerald-300" : "bg-emerald-400"
      } text-center`}
    >
      <td className="flex gap-6 p-2">
        <span>{cookieStandData.location}</span>
        <button onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
      {cookieStandData.hourly_sales.map((sales, index) => {
        return <td key={index}>{sales}</td>;
      })}
      <td className="p-1">{total}</td>
    </tr>
  );
}

function TableFooter({ cookieStandsData }) {
  const hourTotals = [];
  let allHoursTotal = 0;

  for (let index = 0; index < hours.length; index++) {
    let hourTotal = 0;
    for (const cookieStandData of cookieStandsData) {
      hourTotal += cookieStandData.hourly_sales[index];
    }
    hourTotals.push(hourTotal);
    allHoursTotal += hourTotal;
  }

  return (
    <tfoot>
      <tr className="border-t border-emerald-100 divide-x divide-emerald-100">
        <th className="p-2">Totals</th>
        {hourTotals.map((total, index) => {
          return (
            <th key={index} className="p-2">
              {total}
            </th>
          );
        })}
        <th className="p-2">{allHoursTotal}</th>
      </tr>
    </tfoot>
  );
}

export default ReportTable;
