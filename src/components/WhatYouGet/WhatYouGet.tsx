'use client';

import React from 'react';
import styles from './WhatYouGet.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhatYouGet = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2
          ref={ref}
          className={`${styles.title} ${isVisible ? styles.animate : ''}`}
        >
          🌈  Hva får du med deg?
        </h2>
        <ul className={styles.bulletList}>
          <li>Verktøy for å håndtere stress og følelser</li>
          <li>Mer trygghet – både med deg selv og sammen med andre</li>
          <li>Innsikt i at psykisk helse er noe vi alle har</li>
          <li>Nye måter å møte utfordringer i hverdagen</li>
        </ul>
      </div>
    </section>
  );
};

