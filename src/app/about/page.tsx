import Header from '../components/Header';

const links = [ "/", "/plans", "/login"];

const About = () =>
{
  return (
    <Header links={ links }>
      About us
    </Header>
  )
}

export default About;
