"use client";

import React from 'react';
import { Link } from 'rk-designsystem';
import { PrinterSmallIcon } from '@navikt/aksel-icons';
import styles from './Download.module.css';
import Image from 'next/image';

export const Download = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Last ned</h2>
          <p className={styles.subtitle}>last ned vårt materiale</p>
        </div>

        <div className={styles.links}>
          <Link 
           
            data-color="neutral"
          >
            <PrinterSmallIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
            Veilederen (.pdf)
          </Link>
          <Link 
    
            data-color="neutral"
          >
            <PrinterSmallIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
            PowerPointen (.ppt)
          </Link>
        </div>
      </div>

      <div className={styles.arrowBottom}>
        <Image
          src="/rightcorner.svg"
          alt=""
          className={styles.arrowImage}
          width={46}
          height={46}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

