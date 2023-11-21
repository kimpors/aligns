import Header from '../components/Header/Header';
import LoginCard from '../components/LoginCard/LoginCard';
import Footer from '../components/Footer/Footer';

const links = [ "/", "/plans", "/about"];

const Login = () =>
{
  return (
    <>
      <Header links={ links }>
        Login
      </Header>
      <LoginCard />
      <Footer />
    </>
  )
}

export default Login;
