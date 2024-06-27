'use client';

import { Top } from './Button';
import styles from './topButton.module.css';

export default function TopButton({}) {
  return (
    <button className={styles.topButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Top size={48} />
    </button>
  );
}
