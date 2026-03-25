import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  let token = sessionStorage.getItem("token");

  const handleLogout = () => {
    const confirmMsg = confirm("Are you sure ?");
    if (confirmMsg) {
      sessionStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <figure className={styles.logoWrapper}>
        <img
          src="https://onliestworld.com/assets/svg/onliestlogo.svg"
          alt="Onliest Logo"
          className={styles.logo}
        />
      </figure>

      {/* Hamburger */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <nav className={`${styles.navlinks} ${isOpen ? styles.active : ""}`}>
        {token ? (
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
