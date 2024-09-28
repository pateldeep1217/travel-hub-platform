import styles from "./Destination.module.scss";
import { IconLocationFilled } from "@tabler/icons-react";

type DestinationProps = {
  image: string;
  name: string;
  price: string;
  tripDetails: string;
};

function Destination({ image, name, price, tripDetails }: DestinationProps) {
  return (
    <div className={styles.destination}>
      <img src={image} alt="" className={styles.destinationImg} />
      <div className={styles.destinationInfo}>
        <div className={styles.details}>
          <p className={styles.destinationName}>{name}</p>
          <p className={styles.destinationPrice}>{price}</p>
        </div>
        <p className={styles.tripDetails}>
          <span>
            <IconLocationFilled size={15} fill="#000" />
          </span>
          {tripDetails}
        </p>
      </div>
    </div>
  );
}

export default Destination;
