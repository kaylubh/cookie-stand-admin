function Form({ onSubmit }) {

  function handleSubmit(event) {
    event.preventDefault()
    let cookieStand = {}
    cookieStand.location = event.target.location.value
    cookieStand.minCustomers = event.target.minCustomers.value
    cookieStand.maxCustomers = event.target.maxCustomers.value
    cookieStand.avgCookies = event.target.avgCookies.value
    onSubmit(cookieStand)
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-auto p-4 bg-green-300 rounded-xl">

      <h2 className="mx-auto text-xl font-semibold">Create Cookie Stand</h2>

      <div className="flex gap-2">
        <label htmlFor="location">Location</label>
        <input type="text" name="location" required className="flex-auto" />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="minCustomers">Minimum Customers Per Hour</label>
          <input type="number" required  name="minCustomers" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="maxCustomers">Maximum Customers Per Hour</label>
          <input type="number" required  name="maxCustomers" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="avgCookies">Average Cookies Per Sale</label>
          <input type="number" required  name="avgCookies" />
        </div>
      </div>

      <button type="submit" className="p-2 bg-green-500 font-semibold">Create</button>

    </form>
  )
}

export default Form;
