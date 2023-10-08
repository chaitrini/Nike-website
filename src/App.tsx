import Nav from "./components/Nav";
import Hero from "./Sections/Hero";
import Services from './Sections/Services';
import PopularProducts from './Sections/PopularProducts'
import SuperQuality from "./Sections/SuperQuality";
import Subscribe from "./Sections/Subscribe";
import SpecialOffers from "./Sections/SpecialOffers";
import Footer from "./Sections/Footer";
import CustomerReviews from "./Sections/CustomerReviews";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
      </section>
      <section>
        <PopularProducts />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffers />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section><Subscribe /></section>
      <section><Footer /></section>
    </main>
  )
}

export default App;