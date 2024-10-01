import EasyandFast from "./components/EasyandFast/EasyandFast";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import ServicesCategory from "./components/ServicesCategory";
import TopDestination from "./components/TopDestination";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesCategory />
      <TopDestination />
      <EasyandFast />
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
