import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <section id="services">
        <h2>We Offer Best Services</h2>
        <div className="service">
          <h3>Calculated Weather</h3>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </div>
        <div className="service">
          <h3>Best Flights</h3>
          <p>
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </div>
        <div className="service">
          <h3>Local Events</h3>
          <p>We deliver outsourced aviation services for military customers.</p>
        </div>
        <div className="service">
          <h3>Customization</h3>
          <p>Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
      </section>

      <section id="top-selling">
        <h2>Top Selling</h2>
        <div className="destination">
          <h3>Rome, Italy</h3>
          <p>$5,42k</p>
        </div>
        <div className="destination">
          <h3>London, UK</h3>
          <p>$4.2k</p>
        </div>
        <div className="destination">
          <h3>Full Europe</h3>
          <p>$15k</p>
        </div>
      </section>

      <section id="easy-fast">
        <h2>Easy and Fast</h2>
        <h3>Book Your Next Trip in 3 Easy Steps</h3>
        <div className="step">
          <h4>Choose Destination</h4>
          <p>
            Select from a variety of exciting destinations. Whether it’s Greece
            or Rome, start your journey by picking the perfect location.
          </p>
          <p>
            Trip To Greece
            <br />
            14-29 June
            <br />
            by Robbin Joseph
            <br />
            Ongoing
          </p>
        </div>
        <div className="step">
          <h4>Make Payment</h4>
          <p>
            Complete your booking with our secure and easy payment options. This
            step finalizes your reservation and secures your spot.
          </p>
          <p>
            Trip to Rome
            <br />
            40% completed
            <br />
            24 people going
          </p>
        </div>
        <div className="step">
          <h4>Reach Airport on Selected Date</h4>
          <p>
            Arrive at the airport on your chosen date. Get ready to join fellow
            travelers and start your adventure.
          </p>
        </div>
      </section>

      <section id="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <footer>- Mike Taylor, Lahore, Pakistan</footer>
        </blockquote>
        <blockquote>
          <p>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <footer>- Chris Thomas, CEO of Red Button</footer>
        </blockquote>
      </section>

      <section id="subscribe">
        <h2>
          Subscribe to Get Information, Latest News, and Other Interesting
          Offers About Jadoo
        </h2>
        <form action="#" method="post">
          <input type="email" name="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#help">Help/FAQ</a>
          </li>
          <li>
            <a href="#airline-fees">Airline Fees</a>
          </li>
          <li>
            <a href="#app">Discover Our App</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#press">Press</a>
          </li>
          <li>
            <a href="#airline">Airline</a>
          </li>
          <li>
            <a href="#mobile">Mobile</a>
          </li>
          <li>
            <a href="#affiliates">Affiliates</a>
          </li>
          <li>
            <a href="#low-fare-tips">Low Fare Tips</a>
          </li>
        </ul>
        <p>All rights reserved &copy; Jadoo.co</p>
      </footer>
    </div>
  );
}

export default App;
