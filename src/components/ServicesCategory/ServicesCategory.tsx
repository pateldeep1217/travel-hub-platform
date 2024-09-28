import React from "react";
import { SatelliteDish, Plane, Microphone, PowerSupply } from "../svgs";

import styles from "./ServicesCategory.module.scss";
import Service from "./Service";
import ServicePlane from "../svgs/ServicePlane";
import EvenColumns from "../common/EvenColumns";
import Container from "../common/Container";

const ServicesCategory: React.FC = () => {
  return (
    <section className={styles.servicesCategory}>
      <Container>
        <div className={styles.headingWrapper}>
          <h4>Category</h4>
          <h2>We Offer Best Services</h2>
        </div>
        <div className={styles.services}>
          <EvenColumns columns={4}>
            {/* Satellite Services */}
            <Service
              Icon={SatelliteDish}
              afterStyles={styles.afterSatelliteDish}
              title="Global Connectivity"
              description="Stay connected anywhere in the world with our advanced satellite communication services."
            />
            {/* Flight Booking */}
            <Service
              Icon={ServicePlane}
              afterStyles={styles.afterPlane}
              title="Flight Booking"
              description="Book flights to your favorite destinations with seamless, real-time booking services."
            />
            {/* Travel Guides */}
            <Service
              Icon={Microphone}
              afterStyles={styles.afterMicrophone}
              title="Travel Guides"
              description="Explore new cultures and destinations with personalized travel guides and tours."
            />
            {/* Travel Gear */}
            <Service
              Icon={PowerSupply}
              afterStyles={styles.afterPowerSupply}
              title="Travel Gear"
              description="Get the best travel gear, including mobile chargers and accessories, for your next trip."
            />
          </EvenColumns>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCategory;
