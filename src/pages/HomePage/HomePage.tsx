import { Link } from 'react-router';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <section className={styles.hero}>
        <h2>Welcome to Bazaar</h2>
        <p>Curated goods for everyday life.</p>
        <Link to="/shop" className={styles.shopButton}>
          Shop Now
        </Link>
      </section>

      <section className={styles.featured}></section>
    </main>
  );
}
