import Link from 'next/link'
import styles from './Header.module.css';

interface Props
{
  children: string;
  links?: string[];
}

const Header = ({ children, links }: Props) =>
{
  return (
    <header className={ styles.header }>
      <h1>{ children }</h1>
      <nav>
        {(links || []).map(link => <Link href={ link }> { link.substring(1) || "home" } </Link>)}
      </nav>
    </header>
  )
}

export default Header;
