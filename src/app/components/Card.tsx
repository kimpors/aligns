import Link from 'next/link';

interface Props
{
  title: string;
  description: string;
  link: string;
}

const Card = ( { title, description, link }: Props) => 
{
  return (
    <section className="card">
      <h2>{ title }</h2> 
      <p>{ description }</p>
      <Link href={ link }>more</Link>
    </section>
  )
}

export default Card;
