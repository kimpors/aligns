import Footer from './components/Footer';
import Header from './components/Header';
import Link from 'next/link';

const links = [ "/plans", "/login", "/about" ];

function Home()
{
  return (
    <>
      <Header links={ links }>
        Web Hosting
      </Header>
      <Footer />
    </>
  )
}

export default Home;
