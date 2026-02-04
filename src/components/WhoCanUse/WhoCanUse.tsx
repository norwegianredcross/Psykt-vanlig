'use client';

import React from 'react';
import styles from './WhoCanUse.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhoCanUse = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2
          ref={ref}
          className={`${styles.title} ${isVisible ? styles.animate : ''}`}
        >
          👥 Hvem kan bruke det?
        </h2>
        <ul className={styles.bulletList}>
          <li>Frivillige i Røde Kors</li>
          <li>Lærere og fagpersoner</li>
          <li>Ungdom som leder workshops for jevnaldrende</li>
        </ul>
        <p className={styles.note}>Du må ha gjennomført opplæring i Psykt Vanlig for å bruke opplegget.</p>
      </div>
    </section>
  );
};

