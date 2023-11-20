import Header from '../components/Header';
import Footer from '../components/Footer';

const links = [ "/", "/plans", "/about"];

const Login = () =>
{
  return (
    <>
      <Header links={ links }>
        Login
      </Header>
      <Footer />
    </>
  )
}

export default Login;
