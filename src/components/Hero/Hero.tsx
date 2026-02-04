import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.brainIllustration} aria-hidden="true">
        <Image
          src="/brain.svg"
          alt=""
          className={styles.brainImage}
          width={259}
          height={281}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Psykt vanlig</h1>
        <p className={styles.subtitle}>
          Livet er som bølger – noen ganger chill, andre ganger skikkelig kaos.
        </p>

        <div className={styles.textBlock}>
          <p className={styles.desktopText}>
            Noen dager surfer du lett: alt funker, du føler deg trygg og har det bra.
          </p>
          <p className={styles.desktopText}>
            Andre dager kommer det en diger bølge – og du kan kjenne på stress, misforståelser og følelsen av å ikke passe inn.
          </p>
          <p className={styles.desktopText}>
            Sånn er livet. Det svinger for alle.
          </p>
          <p className={`${styles.lastParagraph} ${styles.desktopText}`}>
            Psykt Vanlig gir deg tips til å holde balansen, stå stødig når bølgene blir høye og surfe tryggere gjennom livet.
          </p>
          <p className={styles.mobileText}>
            Noen dager surfer du lett: alt funker, du føler deg trygg og har det bra. Andre dager kommer det en diger bølge – og du kan kjenne på stress, misforståelser og følelsen av å ikke passe inn. Sånn er livet. Det svinger for alle. Psykt Vanlig gir deg tips til å holde balansen, stå stødig når bølgene blir høye og surfe tryggere gjennom livet.
          </p>
        </div>
      </div>

      <div className={styles.surfIllustration} aria-hidden="true">
        <Image
          src="/63c8debdef9068e74d9ce1ae683469101368f58d.png"
          alt=""
          className={styles.surfImage}
          width={290}
          height={194}
        />
      </div>

      <div className={styles.redCross} aria-hidden="true">
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M68 0V33.8203H67.998V68H34.1777V33.8203H0V0H68Z" fill="#DA4236"/>
        </svg>
      </div>
    </section>
  );
};

