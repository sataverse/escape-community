'use client';

import React from 'react';
import styles from './layout.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { preventScroll, allowScroll } from '@/untility';

export default function ModalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => allowScroll(prevScrollY);
  }, []);

  return (
    <div className={styles.modalBackground} onClick={onClickClose}>
      {children}
    </div>
  );
}
