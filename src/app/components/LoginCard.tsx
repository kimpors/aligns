import Link from 'next/link';
import styles from './LoginCard.module.css';

const LoginCard = () => 
{
  return (
    <article className={ styles.login }>
      <section>
        <p>
          <label>Nickname</label>
          <br />
          <input type="text" />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" />
        </p>
        <Link href='/'>Login</Link>
      </section>
    </article>
  )
}

export default LoginCard;
