import styles from './styles.module.css';

const Footer = () => 
{
  return (
    <footer className={ styles.footer }>

      <article>
        <h2>Web Host</h2>

        <section>
          <p>
            copyright@something
          </p>
          <p>
            contacts
          </p>
        </section>
      </article>
    </footer>
  )
}

export default Footer;
