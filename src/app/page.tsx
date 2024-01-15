import Link from 'next/link';
import Card from './components/Card/Card';
import styles from './styles.module.css';

function Home()
{
  return (
    <main role="main">
      <article className={ styles.plans }>
        <Card>
          <h2>Basic</h2>
          <p>
            Our Basic Plan is perfect for individuals and small businesses
            looking to establish their online presence. With reliable hosting
            services, you get a solid foundation for your website without breaking
            the bank. Enjoy ample storage space, essential features, and
            responsive customer support to ensure your website is up and
            running smoothly.
          </p>
          <Link href="/plans">more</Link>
        </Card>
        <Card>
          <h2>Standart</h2>
          <p>
            Upgrade to our Standard Plan for a more robust hosting experience.
            Ideal for growing businesses and websites with moderate traffic, this
            plan offers increased resources, faster loading times, and enhanced
            security features. Benefit from advanced tools and a user-friendly
            control panel to manage your site effortlessly. Our Standard Plan
            strikes the right balance between performance and affordability.
          </p>
          <Link href="/plans">more</Link>
        </Card>
        <Card>
          <h2>Advanced</h2>
          <p>
            For high-performance websites and demanding online ventures, our
            Advanced Plan is the ultimate solution. Unleash the full potential
            of your website with top-tier hosting infrastructure, priority support,
            and advanced security measures. Enjoy lightning-fast load times,
            generous resource allocations, and the flexibility to customize your
            hosting environment. The Advanced Plan is designed for businesses that
            prioritize speed, reliability, and scalability for their online success.
          </p>
          <Link href="/plans">more</Link>
        </Card>
      </article>
      <article className={ styles.info }>
        <h2>Perfect solution</h2>
        <section>
          <p>
            <h3>Unbeatable Reliability</h3>
            Count on us for uninterrupted website performance,
            minimal downtime, and swift loading times. Our robust
            infrastructure ensures a consistently reliable hosting
            experience.
          </p>

          <p>
            <h3>Seamless Scalability</h3>
            Adapt effortlessly to your growing needs. Upgrade your
            hosting plan with ease as your website expands, accommodating
            increased traffic and resource demands.
          </p>

          <p>
            <h3>Support and Security Excellence</h3>
            Experience dedicated customer support 24/7. Our advanced
            security features shield your website from threats,
            providing a worry-free environment for your online presence.
          </p>
        </section>
      </article>
      <article className={ styles.start }>
        <h2>Start For Free</h2>
        <Link href="/login">Now</Link>
      </article>
    </main>
  )
}

export default Home;
