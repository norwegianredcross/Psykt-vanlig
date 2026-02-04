'use client';

import React from 'react';
import { CrossCorner } from 'rk-designsystem';
import styles from './HowItWorks.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.cornerTopRight}>
        <CrossCorner position="top-right" size="md" />
      </div>

      <div className={styles.content}>
        <h2
          ref={ref}
          className={`${styles.title} ${isVisible ? styles.animate : ''}`}
        >
          <span className={styles.desktopTitle}>🛠 Hvordan fungerer <br></br> kurset?</span>
          <span className={styles.mobileTitle}>🛠 Hvordan fungerer kurset?</span>
        </h2>
        <p className={styles.text}>
          Psykt Vanlig er delt inn i fire nivåer – du kan bruke hele opplegget eller velge ut det som passer best for din gruppe.
        </p>
      </div>

      <div className={styles.cornerBottomLeft}>
        <CrossCorner position="bottom-left" size="md" />
      </div>
    </section>
  );
};

