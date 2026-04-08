import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>My Website</h2>
      <div style={styles.links}>
        <NavLink to="/" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>About</NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contact</NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px",
    background: "#222",
    color: "#fff",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "16px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  activeLink: {
    color: "yellow",
    textDecoration: "underline",
  },
};