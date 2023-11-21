import Header from '../components/Header';
import LoginCard from '../components/LoginCard';
import Footer from '../components/Footer';

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
