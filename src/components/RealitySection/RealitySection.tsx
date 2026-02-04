import React from 'react';
import styles from './RealitySection.module.css';
import Image from 'next/image';

export const RealitySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>...og hvordan det faktisk er:</h2>

        <div className={styles.illustrationWrapper}>
          <Image
            src="/illustration.svg"
            alt="Illustrasjon som viser at livet svinger mellom å føle seg frisk og syk"
            className={styles.illustration}
            width={600}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};
