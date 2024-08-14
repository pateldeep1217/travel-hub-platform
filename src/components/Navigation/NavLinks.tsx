import styles from "./Navigation.module.scss";

const links = [
  { href: "#destinations", label: "Destinations" },
  { href: "#hotels", label: "Hotels" },
  { href: "#flights", label: "Flights" },
  { href: "#bookings", label: "Bookings" },
];

function NavLinks() {
  return (
    <ul className={styles.links}>
      {links.map(({ href, label }) => (
        <li key={href}>
          <a href={href}>{label}</a>
        </li>
      ))}

      <li>
        <a href="#">Log in</a>
      </li>
      <li>
        <a href="#">Sign up</a>
      </li>

      <li>
        {/* when clik it will dropdown */}
        <a href="#">EN</a>
      </li>
    </ul>
  );
}

export default NavLinks;
