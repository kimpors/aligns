import Link from 'next/link';
import styles from './Card.module.css';

interface Props
{
  className?: string;
  title: string;
  description: string;
  link: string;
}

const Card = ( { className, title, description, link }: Props) => 
{
  const card = `${ styles.card } + ${ className || ""}`;

  return (
    <section className={ card }>
      <h2>{ title }</h2> 
      <p>{ description }</p>
      <Link href={ link }>more</Link>
    </section>
  )
}

export default Card;
