'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Level2.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Level2 = () => {
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
            <span className={styles.desktopTitle}>Nivå 2: leve med andre</span>
            <span className={styles.mobileTitle}>
              Nivå 2: <br /> leve med andre
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>Å fortelle andre hva du føler og trenger, så andre skjønner deg.</li>
              <li>Å lytte på en måte som viser at du bryr deg.</li>
              <li>Å bli tryggere på deg selv og kroppen din.</li>
            </ul>
          </div>
        </div>
        
        <div 
          ref={illustrationRef}
          className={`${styles.illustrationBlock} ${illustrationVisible ? styles.animate : ''}`}
        >
          <Image 
            src="/illustrationblock3.png" 
            alt="" 
            className={styles.illustrationImage}
            aria-hidden="true"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

