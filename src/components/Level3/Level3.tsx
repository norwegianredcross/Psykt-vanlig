'use client';

import React from 'react';
import Image from 'next/image';
import { CrossCorner } from 'rk-designsystem';
import styles from './Level3.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Level3 = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: illustrationRef, isVisible: illustrationVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div
          ref={textRef}
          className={`${styles.textBlock} ${textVisible ? styles.animate : ''}`}
        >
          <h2 className={styles.title}>
            <span className={styles.desktopTitle}>Nivå 3: leve i samfunnet</span>
            <span className={styles.mobileTitle}>
              Nivå 3: <br /> leve i samfunnet
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>Hva stereotypier og fordommer er</li>
              <li>Hvorfor vi alle trenger å høre til, og hvordan du kan bidra til at andre føler seg inkludert</li>
              <li>Hvordan gruppe press funker –og hvordan du kan stå imot.</li>
              <li>Hvordan sosiale medier påvirker deg, og hvordan du kan bruke dem på en sunn måte.</li>
            </ul>
          </div>
        </div>

        <div
          ref={illustrationRef}
          className={`${styles.illustrationBlock} ${illustrationVisible ? styles.animate : ''}`}
        >
          <Image
            src="/illustrationblock4.png"
            alt=""
            className={styles.illustrationImage}
            aria-hidden="true"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className={styles.cornerWrapper}>
        <CrossCorner position="bottom-left" size="md" />
      </div>
    </section>
  );
};

