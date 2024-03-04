function LoginForm({ onLogin }) {
  async function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mx-auto border-2 border-emerald-400 p-4 bg-emerald-200 rounded-xl text-gray-900 caret-emerald-500"
    >
      <legend className="mx-auto text-xl font-semibold">Log In</legend>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-center font-semibold">
          Username
        </label>
        <input
          name="username"
          className="flex-auto outline-none focus:outline-emerald-400 focus:outline-offset-0"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-center font-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="flex-auto outline-none focus:outline-emerald-400 focus:outline-offset-0"
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-emerald-500 rounded-lg font-semibold"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
