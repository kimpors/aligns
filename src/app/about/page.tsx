import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './About.module.css';

const links = [ "/", "/plans", "/login"];

const About = () =>
{
  return (
    <>
      <Header links={ links }>
        About us
      </Header>
      <section className={ styles.about }>
        <h2>Why choose us</h2>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat. 
        </p>
      </section>
      <Footer />
    </>
  )
}

export default About;
