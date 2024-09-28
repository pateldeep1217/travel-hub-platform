import Container from "../common/Container";
import EvenColumns from "../common/EvenColumns";
import travelIMG from "/traveller-1.png";
import styles from "./Hero.module.scss";
import { Plane } from "../svgs";
import clsx from "clsx";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <EvenColumns columns={2} className={styles.overrideGrid}>
          <div className={clsx(styles.heroContent, styles.flow)}>
            <h3>Best Destinations Around The World</h3>
            <h1>
              Travel, <span>enjoy</span> and live a new and full life
            </h1>

            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <Button>Find out more</Button>
          </div>

          <div className={styles.heroImageContainer}>
            <div className={clsx(styles.planeIcon, styles.planeIconTop)}>
              <Plane />
            </div>
            <img
              src={travelIMG}
              alt="Girl with backpack sitting on luggage"
              className={styles.heroImage}
            />
            <div className={clsx(styles.planeIcon, styles.planeIconBottom)}>
              <Plane />
            </div>
          </div>
        </EvenColumns>
      </Container>
    </section>
  );
}

export default Hero;
