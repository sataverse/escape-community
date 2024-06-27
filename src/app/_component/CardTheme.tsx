'use client';

import Link from 'next/link';
import { StarIcon, LockIcon } from './Icons';
import IconTextLabel from './IconTextLabel';
import styles from './card.module.css';
import { getPointColor, getScoreColor } from '@/untility';

interface Props {
  pos?: number;
}

export default function CardTheme({ pos }: Props) {
  const { textColor: scoreTextColor, bgColor: scoreBgColor } = getScoreColor(9.4);
  const { difficulty, textColor: difficultyTextColor, bgColor: difficultyBgColor } = getPointColor(2);

  return (
    <Link href={'/theme/info'}>
      <div
        className={styles.cardWrapper}
        style={{ width: '200rem', height: '320rem', transform: `translateX(-${pos}rem)` }}
      >
        <img
          className={styles.cardImage}
          style={{ width: '180rem', height: '220rem' }}
          src={'/image/층간소음.jpeg'}
          alt="profile"
        />
        <div className={styles.cardTextsWrapper}>
          <IconTextLabel
            icon={<StarIcon size={15} color={scoreTextColor} />}
            text="9.4"
            font={14}
            textColor={scoreTextColor}
            bgColor={scoreBgColor}
          />
          <IconTextLabel
            icon={<LockIcon size={15} color={difficultyTextColor} />}
            text={difficulty}
            font={14}
            textColor={difficultyTextColor}
            bgColor={difficultyBgColor}
          />
        </div>
        <div>
          <div className={styles.cardText} style={{ color: 'gray', fontSize: '14rem' }}>
            제로월드 홍대점
          </div>
          <div className={styles.cardText}>층간소음</div>
        </div>
      </div>
    </Link>
  );
}
