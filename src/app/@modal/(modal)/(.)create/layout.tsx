'use client';

import React from 'react';
import styles from './layout.module.css';

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.createModal} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
}
