import styles from "./styles";
import {
  Hero,
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
} from "./components/index";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex justify-center p-6">
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary p-6 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
