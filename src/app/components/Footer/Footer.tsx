import styles from './Footer.module.css';

const Footer = () => 
{
  return (
    <footer className={ styles.footer }>
      <h2>Web Host</h2>

      <section>
        <p>
          copyright@something
        </p>
        <p>
          contacts
        </p>
      </section>
    </footer>
  )
}

export default Footer;
