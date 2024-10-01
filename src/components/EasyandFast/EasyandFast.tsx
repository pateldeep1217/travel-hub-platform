import Container from "../common/Container";
import { Step1, Step2, Step3 } from "../svgs";
import styles from "./EasyandFast.module.scss";
import Step from "./Step";
function EasyandFast() {
  return (
    <section>
      <Container className={styles.containerGap}>
        <h4>Easy and Fast</h4>
        <h3>Book Your Next Trip in 3 Easy Steps</h3>
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
      </Container>
    </section>
  );
}

export default EasyandFast;
