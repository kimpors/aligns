import Header from '../components/Header';
import Footer from '../components/Footer';

const links = [ "/", "/login", "/about"];

const Plans = () =>
{
  return (
    <>
      <Header links={ links }>
        Plans
      </Header>
      <Footer />
    </>
  )
}

export default Plans;
