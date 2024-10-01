import {
  IconBuilding,
  IconHeart,
  IconLeaf,
  IconLocationFilled,
  IconMap,
} from "@tabler/icons-react";
import Container from "../common/Container";
import EvenColumns from "../common/EvenColumns";
import { Step1, Step2, Step3 } from "../svgs";
import styles from "./EasyandFast.module.scss";
import Step from "./Step";
import clsx from "clsx";
function EasyandFast() {
  return (
    <section>
      <Container className={styles.container}>
        <EvenColumns columns={2} className={styles.evenColumns}>
          <div>
            <div className={styles.heading}>
              <h4>Easy and Fast</h4>
              <h2>Book Your Next Trip in 3 Easy Steps</h2>
            </div>
            <div className={styles.steps}>
              <Step
                Icon={<Step1 />}
                title="Choose Destination"
                description="Browse through a wide selection of popular destinations. From bustling cities to serene beaches, pick the perfect place for your next adventure."
              />
              <Step
                Icon={<Step2 />}
                title="Make Payment"
                description="Secure your booking by choosing from a variety of payment options. We ensure a fast, safe, and hassle-free transaction for your convenience."
              />
              <Step
                Icon={<Step3 />}
                title="Reach Airport on Selected Date"
                description="On the day of your trip, arrive at the airport as per the selected date. Your journey is just a few steps away from beginning."
              />
            </div>
          </div>

          <div className={styles.tripCard}>
            <div className={styles.tripContent}>
              <img src="/greece.png" alt="greece" className={styles.img1} />
              <h3 className={styles.title}>Trip To Greece</h3>
              <p>14-29 June | by Robbn </p>
              <div className={styles.flex}>
                <div className={styles.icon}>
                  <IconLeaf size={18} />
                </div>
                <div className={styles.icon}>
                  <IconMap size={18} />
                </div>
                <div className={styles.icon}>
                  <IconLocationFilled size={18} />
                </div>
              </div>
              <div className={clsx(styles.flex, styles.peopleCount)}>
                <IconBuilding />
                <span>24 people going</span>
                <div className={styles.iconHeart}>
                  <IconHeart />
                </div>
              </div>
            </div>

            <div className={styles.tripContent2}>
              <img
                src="/rome.png"
                alt=""
                className={clsx(styles.tripContent2Img, styles.round)}
              />
              <div className={styles.gap}>
                <p className={styles.ongoing}>Ongoing</p>
                <h3 className={clsx(styles.title, styles.tripTitle)}>
                  Trip to rome
                </h3>
                <p>
                  <span>40%</span>completed
                </p>
              </div>
            </div>
          </div>
        </EvenColumns>
      </Container>
    </section>
  );
}

export default EasyandFast;
