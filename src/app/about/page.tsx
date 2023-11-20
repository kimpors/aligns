import Header from '../components/Header';
import Footer from '../components/Footer';

const links = [ "/", "/plans", "/login"];

const About = () =>
{
  return (
    <>
      <Header links={ links }>
        About us
      </Header>
      <Footer />
    </>
  )
}

export default About;
