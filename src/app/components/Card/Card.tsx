import Link from 'next/link';
import styles from './Card.module.css';
import { ReactNode } from 'react';

interface Props
{
  className?: string;
  title: string;
  children: ReactNode;
  link: string;
}

const Card = ( { className, title, children, link }: Props) => 
{
  const card = `${ styles.card } + ${ className || ""}`;

  return (
    <section className={ card }>
      <h2>{ title }</h2> 
      <p>{ children }</p>
      <Link href={ link }>more</Link>
    </section>
  )
}

export default Card;
