'use client';

import { Left, Right } from '@/app/_component/Button';
import styles from './carousel.module.css';
import CardTheme from '@/app/_component/CardTheme';
import { useEffect, useState } from 'react';
import CardShop from '@/app/_component/CardShop';

const max = 9;
const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  title: string;
  type: 'theme' | 'shop' | 'review' | 'photo';
}

export default function Carousel({ title, type }: Props) {
  const [index, setIndex] = useState(0);
  const numOfElement = type === 'theme' ? 3 : 3;
  const buttonTop = type === 'theme' ? 136 : 126;

  const moveLeft = () => {
    const temp = index - numOfElement;
    if (temp < 0) {
      setIndex(0);
    } else {
      setIndex(temp);
    }
  };

  const moveRight = () => {
    const temp = index + numOfElement;
    if (temp > max - numOfElement) {
      setIndex(max - numOfElement + 1);
    } else {
      setIndex(temp);
    }
  };

  /*
  const getThemes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/theme`);
    const data = await res.json();
    console.log(data.data);
  };

  useEffect(() => {
    getThemes();
  }, []);
  */

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.title}>{title}</div>
      <button
        className={styles.carouselButtonWrapper}
        style={{ top: `${buttonTop}rem`, left: '6rem' }}
        onClick={() => moveLeft()}
      >
        <Left size={30} />
      </button>
      <div className={`${styles.carouselElements} scrollbarHidden`}>
        {type === 'theme' ? temp.map((_) => <CardTheme pos={200 * index} />) : null}
        {type === 'shop' ? temp.map((_) => <CardShop pos={200 * index} />) : null}
      </div>
      <button
        className={styles.carouselButtonWrapper}
        style={{ top: `${buttonTop}rem`, right: '6rem' }}
        onClick={() => moveRight()}
      >
        <Right size={30} />
      </button>
    </div>
  );
}
