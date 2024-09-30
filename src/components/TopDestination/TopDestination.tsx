import Container from "../common/Container";
import EvenColumns from "../common/EvenColumns";
import Destination from "./Destination";
import styles from "./TopDestination.module.scss";

function TopDestination() {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.headings}>
          <h4>Top Selling</h4>
          <h2>Top Destinations</h2>
        </div>
        <EvenColumns columns={3} gap="35px" className={styles.destinations}>
          <Destination
            name="Rome, Italy"
            price="$5k"
            image="/destination-italy.png"
            tripDetails="7 Days Trip"
          />
          <Destination
            name="London, UK"
            price="$4.2k"
            image="/destination-uk.png"
            tripDetails="14 Days Trip"
          />
          <Destination
            name="Full Europe"
            price="$15k"
            image="/destination-europe.png"
            tripDetails="28 Days Trip"
          />
        </EvenColumns>
      </Container>
    </section>
  );
}

export default TopDestination;
