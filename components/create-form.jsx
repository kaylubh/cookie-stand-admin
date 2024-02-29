function CreateForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value,
    });
    event.target.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mx-auto p-4 bg-emerald-300 rounded-xl text-gray-900 caret-emerald-500"
    >
      <legend className="mx-auto text-xl font-semibold">
        Create Cookie Stand
      </legend>

      <div className="flex gap-2">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          required
          className="flex-auto outline-none focus:outline-emerald-500 focus:outline-offset-0"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="minCustomers">Minimum Customers Per Hour</label>
          <input
            type="number"
            required
            name="minCustomers"
            className="outline-none focus:outline-emerald-500 focus:outline-offset-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="maxCustomers">Maximum Customers Per Hour</label>
          <input
            type="number"
            required
            name="maxCustomers"
            className="outline-none focus:outline-emerald-500 focus:outline-offset-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="avgCookies">Average Cookies Per Sale</label>
          <input
            type="number"
            required
            name="avgCookies"
            className="outline-none focus:outline-emerald-500 focus:outline-offset-0"
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
