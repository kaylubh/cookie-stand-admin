import { useAuth } from "@/contexts/auth";

function CreateForm({ onCreate }) {
  const { user } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    onCreate({
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minCustomers.value),
      maximum_customers_per_hour: parseInt(event.target.maxCustomers.value),
      average_cookies_per_sale: parseFloat(event.target.avgCookies.value),
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      owner: user.id,
    });
    event.target.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mx-auto border-2 border-emerald-400 p-4 bg-emerald-200 rounded-xl text-gray-900 caret-emerald-500"
    >
      <legend className="mx-auto text-xl font-semibold">
        Create Cookie Stand
      </legend>

      <div className="flex gap-2">
        <label htmlFor="location" className="font-semibold">
          Location
        </label>
        <input
          type="text"
          name="location"
          required
          className="flex-auto outline-none focus:outline-emerald-400 focus:outline-offset-0"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2 p-2 bg-emerald-200 rounded-md">
          <label htmlFor="minCustomers" className="font-semibold">
            Minimum Customers Per Hour
          </label>
          <input
            type="number"
            name="minCustomers"
            required
            min={0}
            step={1}
            className="outline-none focus:outline-emerald-400 focus:outline-offset-0"
          />
        </div>
        <div className="flex flex-col gap-2 p-2 bg-emerald-200 rounded-md">
          <label htmlFor="maxCustomers" className="font-semibold">
            Maximum Customers Per Hour
          </label>
          <input
            type="number"
            name="maxCustomers"
            required
            min={1}
            step={1}
            className="outline-none focus:outline-emerald-400 focus:outline-offset-0"
          />
        </div>
        <div className="flex flex-col gap-2 p-2 bg-emerald-200 rounded-md">
          <label htmlFor="avgCookies" className="font-semibold">
            Average Cookies Per Sale
          </label>
          <input
            type="number"
            name="avgCookies"
            required
            min={1}
            step={0.1}
            className="outline-none focus:outline-emerald-400 focus:outline-offset-0"
          />
        </div>
      </div>

      <button type="submit" className="p-2 bg-emerald-500 font-semibold">
        Create
      </button>
    </form>
  );
}

export default CreateForm;
