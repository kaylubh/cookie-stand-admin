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

function TableRow({ cookieStandData, rowIndex }) {
  const total = cookieStandData.hourly_sales.reduce(
    (sum, sales) => sum + sales
  );

  return (
    <tr
      className={`${
        rowIndex % 2 ? "bg-emerald-300" : "bg-emerald-400"
      } text-center`}
    >
      <td className="p-1">{cookieStandData.location}</td>
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
