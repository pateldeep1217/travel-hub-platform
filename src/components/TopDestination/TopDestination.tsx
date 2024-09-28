import styles from "./TopDestination.module.scss";
import { IconLocation } from "@tabler/icons-react";

function TopDestination() {
  return (
    <section className={styles.destinations}>
      <h4>Top Selling</h4>
      <h2>Top Destinations</h2>
      <div className={styles.destination}>
        <img src="/destination-italy" alt="" />
        <p>Rome, Italy</p>
        <p>$5k</p>
        <p>
          <span>
            <IconLocation />
          </span>
          10 Days Trip
        </p>
      </div>
    </section>
  );
}

export default TopDestination;
