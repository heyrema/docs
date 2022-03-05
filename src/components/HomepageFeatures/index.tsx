import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Png?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'One of its Kind',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Rema was built with the idea of simplifying certificate generation
        and distribution in mind.
      </>
    ),
  },
  {
    title: 'Customizable',
    Png: require('@site/static/img/certificate.png').default,
    description: (
      <>
        Using templates, almost all styles and formats can be achieved.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/degree.svg').default,
    description: (
      <>
        With powerful APIs and user-friendly interfaces, Rema enhances
        the certificate CRUD-cycle and distribution process.
      </>
    ),
  },
];

function Feature({title, Svg, Png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {
          Svg ? <Svg className={styles.featureSvg} role="img" /> : ''
        }
        {
          Png ? <img src={Png} className={styles.featureSvg} role="img" /> : ''
        }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
