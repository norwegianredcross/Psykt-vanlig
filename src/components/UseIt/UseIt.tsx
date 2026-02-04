'use client';

import React, { useState } from 'react';
import { Textfield, Button, CrossCorner } from 'rk-designsystem';
import styles from './UseIt.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const UseIt = () => {
  const [email, setEmail] = useState('');
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(JSON.stringify({ email }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.cornerWrapper}>
        <CrossCorner position="top-right" size="md" />
      </div>

      <div className={styles.content}>
        <h2 
          ref={ref}
          className={`${styles.title} ${isVisible ? styles.animate : ''}`}
        >
          ✉️ Vil du ta det i bruk?
        </h2>
        <p className={styles.text}>
          Ta kontakt med Røde Kors for opplæring og tilgang til materiell.
          <br />
          Du kan også bruke deler av opplegget i skolen, på fritidsklubber eller i andre ungdomsaktiviteter.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Textfield
            type="email"
            placeholder="Din e-post"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className={styles.textfield}
          />
          <Button type="submit" variant="primary" className={styles.button}>
            SEND
          </Button>
        </form>
      </div>
    </section>
  );
};

