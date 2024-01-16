import Link from 'next/link';
import styles from './styles.module.css'

const Login = () =>
{
  return (
    <main role="main">
      <article className={ styles.login }>
        <section>
          <section>
            <p>
              <label>Nickname</label>
              <br />
              <input type="text" />
            </p>
          </section>
          <section>
            <p>
              <label>Password</label>
              <br />
              <input type="password" />
            </p>
            <Link href='/sorry'>Login</Link>
          </section>
        </section>
      </article>
    </main>
  )
}

export default Login;
