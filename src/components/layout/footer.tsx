const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Boutique Piano. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
