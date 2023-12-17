import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './About.module.css';

const links = [ "/", "/plans", "/login"];

const About = () =>
{
  return (
    <>
      <Header links={ links }>
        About us
      </Header>
      <article className={ styles.about }>
        <h2>About us</h2>
        <p>
          Welcome to WebHost - your go-to destination for reliable
          web hosting. We're dedicated to fueling your online
          success with cutting-edge solutions and unwavering support.
        </p>
      </article>
      <article className={ styles.about }>
        <h2>Why WebHost?</h2>

        <section>
          <h3>Expert Team</h3>
          <p>
            Trust our seasoned professionals to deliver
            expertise that keeps your website ahead in
            the digital game.
          </p>

          <h3>Customer Focused</h3>
          <p>
            Experience 24/7 support focused on your satisfaction.
            We're here to troubleshoot, answer questions,
            and ensure your hosting is seamless.
          </p>

          <h3>Leading Technology</h3>
          <p>
            Embrace the future with our state-of-the-art
            infrastructure, providing fast, secure, and scalable
            hosting solutions.
          </p>
        </section>
      </article>
      <article className={ styles.about }>
        <h2>Leading Technology</h2>
        <p>
          Embrace the future with our state-of-the-art
          infrastructure, providing fast, secure, and scalable
          hosting solutions.
        </p>
      </article>
      <Footer />
    </>
  )
}

export default About;
