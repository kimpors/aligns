import Link from 'next/link';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import styles from './Home.module.css';


const links = [ "/plans", "/login", "/about" ];
const description = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.";

function Home()
{
  return (
    <>
      <Header links={ links }>
        Web Hosting
      </Header>
      <Card className={ styles.item1} title="Basic" description={ description } link="/plans" />
      <Card className={ styles.item2 } title="Standart" description={ description } link="/plans" />
      <Card className={ styles.item3 } title="Advanced" description={ description } link="/plans" />
      <article className={ styles.info }>
        <h2>Perfect solution</h2>
        <section>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
        </section>
      </article>
      <article className={ styles.start }>
        <h2>Start For Free</h2>
        <Link href="/login">Now</Link>
      </article>
      <Footer />
    </>
  )
}

export default Home;
