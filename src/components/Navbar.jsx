const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <div className="blurred-background"></div>
        <img className="logo" src="/logo-travel-1.png" alt="" />
      </div>
      <ul className="nav-links">
        <li className="nav-link">About us</li>
        <li className="nav-link">Destinations</li>
        <li className="nav-link">Experiences</li>
        <li className="nav-link">Travel styles</li>
      </ul>
    </nav>
  );
};

export default Navbar;
