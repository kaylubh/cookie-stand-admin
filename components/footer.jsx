function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-emerald-500 text-gray-900 font-semibold">
      <p>&copy;{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
