import Container from "../common/Container";
import Logo from "./Logo";
import Navigation from "../Navigation";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default Header;
