'use client';

import React from 'react';
import styles from './WhyJoin.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhyJoin = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2
          ref={ref}
          className={`${styles.title} ${isVisible ? styles.animate : ''}`}
        >
          🫂 Hvorfor bli med?
        </h2>
        <ul className={styles.bulletList}>
          <li>Et trygt sted der du kan være deg selv</li>
          <li>Ærlige samtaler om ting som betyr noe</li>
          <li>Et fellesskap med folk som vil ha et åpent og inkluderende miljø</li>
        </ul>
      </div>
    </section>
  );
};

