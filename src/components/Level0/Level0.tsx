'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Level0.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Level0 = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: illustrationRef, isVisible: illustrationVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2
            ref={headingRef}
            className={`${styles.title} ${headingVisible ? styles.animate : ''}`}
          >
            <span className={styles.desktopTitle}>Nivå 0: Skape et trygt rom</span>
            <span className={styles.mobileTitle}>
              Nivå 0: <br /> Skape et trygt rom
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>Skaper vi et trygt rom gjennom å gjøre bli kjent-leker og energizer</li>
              <li>Du blir bedre kjent med de andre deltakerne</li>
              <li>Vi blir enige om regler</li>
              <li>Du blir bedre kjent med egen komfortsone og får varmet opp før vi går i gang med de andre nivåene</li>
            </ul>
          </div>
        </div>

        <div
          ref={illustrationRef}
          className={`${styles.illustrationBlock} ${illustrationVisible ? styles.animate : ''}`}
        >
          <Image
            src="/nivå-0-illustration.svg"
            alt="Illustrasjon som viser tre nivåer: Leve med seg selv, Å leve med andre, og Å leve i samfunnet"
            className={styles.illustrationImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

