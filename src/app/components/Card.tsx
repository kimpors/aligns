import Link from 'next/link';
import styles from './Card.module.css';

interface Props
{
  title: string;
  description: string;
  link: string;
}

const Card = ( { title, description, link }: Props) => 
{
  return (
    <section className={ styles.card }>
      <h2>{ title }</h2> 
      <p>{ description }</p>
      <Link href={ link }>more</Link>
    </section>
  )
}

export default Card;
