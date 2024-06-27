'use client';

import Link from 'next/link';
import styles from './card.module.css';

interface Props {
  pos?: number;
}

export default function CardShop({ pos }: Props) {
  return (
    <Link href={'/shop'}>
      <div
        className={styles.cardWrapper}
        style={{ width: '200rem', height: '260rem', transform: `translateX(-${pos}rem)` }}
      >
        <img
          className={styles.cardImage}
          style={{ width: '180rem', height: '180rem' }}
          src={'/image/제로월드.png'}
          alt="profile"
        />
        <div>
          <div className={styles.cardText} style={{ color: 'gray', fontSize: '14rem' }}>
            홍대
          </div>
          <div className={styles.cardText}>제로월드 홍대점</div>
        </div>
      </div>
    </Link>
  );
}
