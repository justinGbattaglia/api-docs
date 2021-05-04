import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Numbers',
    Svg: require('../../static/img/icon-numbers.svg').default,
    description: (
      <>
        We’ve got your number. In fact, we have as many of them as you want.
      </>
    ),
  },
  {
    title: 'Voice',
    Svg: require('../../static/img/icon-voice.svg').default,
    description: (
      <>
        Need to make a call? Placing and receiving phone calls is fast and easy with Bandwidth Voice.
      </>
    ),
  },
  {
    title: 'Messaging',
    Svg: require('../../static/img/icon-messaging.svg').default,
    description: (
      <>
        Communication at its most basic. Adding SMS or MMS is a snap.
      </>
    ),
  },
  {
    title: 'Emergency',
    Svg: require('../../static/img/icon-emergency.svg').default,
    description: (
      <>
        Connect your users to emergency services with fast, reliable, accurate E911 services.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
