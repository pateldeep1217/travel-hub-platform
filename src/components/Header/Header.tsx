import Container from "../common/Container";
import Logo from "../common/Logo";
import Navigation from "../Navigation";
import styles from "./Header.module.scss";
const links = [
  { href: "#destinations", label: "Destinations" },
  { href: "#hotels", label: "Hotels" },
  { href: "#flights", label: "Flights" },
  { href: "#bookings", label: "Bookings" },
];
function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Navigation links={links} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
