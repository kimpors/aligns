'use client'

import Link from 'next/link';
import styles from './styles.module.css'
import { usePathname } from 'next/navigation';

const links = new Map<string, string>([
    ["/", "Web Host"],
    ["/plans", "Plans"],
    ["/login", "Login"],
    ["/about", "About us"],
]);

const Nav = () =>
{
  const pathname = usePathname()

  return(
    <header>
      <nav className={ styles.nav }>
        <h2>{ links.get(pathname) }</h2>
        {
          Array.from(links.keys()).map(link => (
            <Link key={ link } href={ link }>{ link.substring(1) || "home" }</Link>
          ))
        }
      </nav>
    </header>
  )
}

export default Nav;
