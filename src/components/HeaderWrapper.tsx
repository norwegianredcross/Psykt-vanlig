'use client';

import { Header, LanguageProvider } from 'rk-designsystem';

const navItems = [
  { label: 'Om kurs', href: '#om-kurs' },
  { label: 'For lærer', href: '#for-laerer' },
  { label: 'For deltakere', href: '#for-deltakere' },
  { label: 'Kontakt', href: '#kontakt' },
];

const handleSetPage = (pageName: string) => {
  if (pageName.startsWith('#')) {
    document.querySelector(pageName)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export function HeaderWrapper() {
  return (
    <LanguageProvider>
      <Header
        navItems={navItems}
        showNavItems
        showMenuButton={false}
        showUser={false}
        showSearch={false}
        showLogin={false}
        showLanguageSwitch={false}
        secondaryLogo
        secondaryLogoSrc="/Psyktvanlig.svg"
        secondaryLogoAlt="Psykt Vanlig"
        setPage={handleSetPage}
      />
    </LanguageProvider>
  );
}