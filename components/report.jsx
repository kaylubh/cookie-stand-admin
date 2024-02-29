function Report({ newCookieStand }) {
  return (
    <>
      <p className="mx-auto p-4 text-gray-900">
        {JSON.stringify(newCookieStand)}
      </p>
    </>
  );
}

export default Report;
