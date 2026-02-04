'use client';

import React, { useState } from 'react';
import styles from './IllustrationSection.module.css';
import Image from 'next/image';
import { Switch } from 'rk-designsystem';

export const IllustrationSection = () => {
  const [isFrisk, setIsFrisk] = useState(true);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Myten om psykisk helse...</h2>

        <div className={styles.illustrationWrapper}>
          <Image
            src="/illustration-frisk.svg"
            alt="Illustrasjon av en glad person som løper i solen"
            className={`${styles.illustration} ${isFrisk ? styles.visible : styles.hidden}`}
            width={397}
            height={421}
          />
          <Image
            src="/illustration-syk.svg"
            alt="Illustrasjon av en person under en mørk sky"
            className={`${styles.illustration} ${!isFrisk ? styles.visible : styles.hidden}`}
            width={397}
            height={421}
          />
        </div>

        <div className={styles.switchWrapper}>
          <Switch
            checked={!isFrisk}
            onChange={() => setIsFrisk(!isFrisk)}
            data-size="md"
            data-color="neutral"
          />
          <span className={styles.switchLabel}>{isFrisk ? 'Frisk' : 'Syk'}</span>
        </div>
      </div>
    </section>
  );
};
