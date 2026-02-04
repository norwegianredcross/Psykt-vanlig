'use client';

import React from 'react';
import styles from './WhatIsTheCause.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhatIsTheCause = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 
          ref={headingRef}
          className={`${styles.title} ${headingVisible ? styles.animate : ''}`}
        >
          🤔 Hva er Psykt vanlig?
        </h2>
        <p className={styles.text}>
          Psykt vanlig er for deg mellom 13 og 25 år, og tar opp temaer mange unge kjenner på: vennskap, press, stress, selvfølelse, grenser, identitet og psykisk helse i en digital hverdag. Workshopene er lavterskel og foregår i et trygt og inkluderende rom. Du velger selv hvor mye du vil dele, og det er helt greit å bare lytte. Det finnes ingen riktige eller gale svar.
        </p>
      </div>
    </section>
  );
};

