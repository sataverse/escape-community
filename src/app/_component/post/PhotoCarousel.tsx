'use client';

import { Left, Right } from '../Button';
import EscapeInfo from './EscapeInfo';
import styles from './photoCarousel.module.css';
import { useRef, useState } from 'react';

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.photoArea} ref={carouselRef}>
        <div
          style={{
            transform: !carouselRef.current
              ? 'translateX(0rem)'
              : `translateX(-${carouselRef.current?.offsetWidth * index}rem)`,
          }}
        >
          <EscapeInfo />
        </div>
        <div
          style={{
            transform: !carouselRef.current
              ? 'translateX(0rem)'
              : `translateX(-${carouselRef.current?.offsetWidth * index}rem)`,
          }}
        >
          <img src="/image/후기.jpeg" alt="후기" />
        </div>
        <div
          style={{
            transform: !carouselRef.current
              ? 'translateX(0rem)'
              : `translateX(-${carouselRef.current?.offsetWidth * index}rem)`,
          }}
        >
          <img src="/image/후기.jpeg" alt="후기" />
        </div>
        <div
          style={{
            transform: !carouselRef.current
              ? 'translateX(0rem)'
              : `translateX(-${carouselRef.current?.offsetWidth * index}rem)`,
          }}
        >
          <img src="/image/후기.jpeg" alt="후기" />
        </div>
      </div>
      <button
        className={styles.left}
        onClick={() => setIndex(index - 1)}
        style={{ visibility: index === 0 ? 'hidden' : 'visible' }}
      >
        <Left size={30} />
      </button>
      <button
        className={styles.right}
        onClick={() => setIndex(index + 1)}
        style={{ visibility: index === 3 ? 'hidden' : 'visible' }}
      >
        <Right size={30} />
      </button>
    </>
  );
}
