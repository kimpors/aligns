import Link from 'next/link';
import styles from './Card.module.css';
import { ReactNode } from 'react';

interface Props
{
  className?: string;
  children: ReactNode;
}

const Card = ( { className, children }: Props) => 
{
  const card = `${ styles.card } + ${ className || ""}`;

  return (
    <section className={ card }>
      { children }
    </section>
  )
}

export default Card;
