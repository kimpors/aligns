import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
