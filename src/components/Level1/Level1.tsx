'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Level1.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Level1 = () => {
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
            <span className={styles.desktopTitle}>Nivå 1: leve med seg selv</span>
            <span className={styles.mobileTitle}>
              Nivå 1: <br /> leve med seg selv
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>Hva følelser er og hva de forteller oss</li>
              <li>Hvordan du kan bli mentalt sterk ved å møte dine egne følelser med forståelse og vennlighet.</li>
              <li>Å bli tryggere på deg selv og kroppen din.</li>
              <li>Hvorfor det er viktig å gjøre feil –og hvordan du lærer av det.</li>
            </ul>
          </div>
        </div>
        
        <div 
          ref={illustrationRef}
          className={`${styles.illustrationBlock} ${illustrationVisible ? styles.animate : ''}`}
        >
          <Image
            src="/niva-1-illustration.svg"
            alt="Leve med seg selv - illustrasjon av person som mediterer"
            className={styles.illustrationImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

