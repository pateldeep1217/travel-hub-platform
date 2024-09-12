import Container from "../common/Container";
import EvenColumns from "../common/EvenColumns";
import styles from "./ServicesCategory.module.scss";
function ServicesCategory() {
  return (
    <section className={styles.services}>
      <Container>
        <h2>We Offer Best Services</h2>
        <EvenColumns columns={4}>
          <div className={styles.service}>
            <h3>Calculated Weather</h3>
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Best Flights</h3>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Local Events</h3>
            <p>
              We deliver outsourced aviation services for military customers.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Customization</h3>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
        </EvenColumns>
      </Container>
    </section>
  );
}

export default ServicesCategory;
