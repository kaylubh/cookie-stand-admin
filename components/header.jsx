function Header({ user, onLogout }) {
  return (
    <header className="flex justify-between p-4 bg-emerald-500 text-gray-900">
      <h1 className="text-4xl font-semibold">Cookie Stand Admin</h1>

      {user ? (
        <div className="flex gap-4">
          <button
            disabled="disabled"
            className="px-4 bg-emerald-200 rounded-md font-semibold"
          >
            {user.username}
          </button>
          <button
            onClick={onLogout}
            className="px-4 bg-emerald-300 rounded-md font-semibold"
          >
            Log Out
          </button>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
