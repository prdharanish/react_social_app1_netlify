const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <p>&copy; {currentYear} Dharanish Blog. All rights reserved.</p>
      <p>
        Built with 💻 using <strong>React</strong>
      </p>
    </footer>
  );
};

export default Footer;
