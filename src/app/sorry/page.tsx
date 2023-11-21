import Header from '../components/Header/Header';
import styles from './Sorry.module.css';

const Sorry = () =>
{
  return(
  <>
    <Header>
      Sorry v_v
    </Header>
    <section className={ styles.sorry }>
      <p>
        This feature doesn't implemented.... so you can go back
      </p>
    </section>
  </>
  )
}

export default Sorry;

