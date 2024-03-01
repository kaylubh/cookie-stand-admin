function Footer({ cookieStandsCount }) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-emerald-500 text-gray-900 text-lg font-semibold">
      <p>{cookieStandsCount} Locations World Wide</p>
    </footer>
  );
}

export default Footer;
