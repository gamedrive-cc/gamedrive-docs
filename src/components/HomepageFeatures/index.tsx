import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  href: string;
  buttonText: string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Main Website',
    image: 'img/gamedrive-logo.png',
    description: (
      <>
        Check out landing page to new updates
      </>
    ),
    href: 'https://www.gamedrive.cc',
    buttonText: 'Go to Website 🌐'
  },
  {
    title: `Console`,
    image: `img/gamedrive-white.png`,
    description: (
      <>
        Start manage your backend
      </>
    ),
    href: 'https://console.gamedrive.cc',
    buttonText: `Sign In to Console 🔑`
  }
];

function Feature({ title, image, description, href, buttonText }: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className="text--center">
        <img className={styles.featureImage} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link
          className="button button--primary button--lg"
          to={href}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
