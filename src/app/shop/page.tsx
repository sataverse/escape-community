import PageHeader from '../_component/PageHeader';
import Image from 'next/image';
import styles from './page.module.css';
import { LikeIcon } from '@/app/_component/Icons';
import Horizon from '../_component/Horizon';
import { TextColor } from '@/untility';
import { LikeButtonMini } from '../_component/LikeButton';
import CardTheme from '../_component/CardTheme';

export default function SearchLayout() {
  return (
    <>
      <PageHeader text="매장 정보" />
      <div className={styles.mainInfoWrapper}>
        <div>
          <img src={'/image/제로월드.png'} alt="이미지" />
          <LikeButtonMini />
        </div>
        <div>
          <div style={{ fontSize: '20rem', marginRight: '6rem' }}>제로월드 홍대점</div>
          <div style={{ color: 'gray' }}>{'서울 > 홍대'}</div>
        </div>
        <div className={styles.iconLabel}>
          <LikeIcon size={17} color={TextColor.BLUE} />
          <div style={{ color: TextColor.BLUE }}>283</div>
        </div>
      </div>
      <div className={styles.horizon} />
      <div className={styles.gridWrapper}>
        <CardTheme />
        <CardTheme />
        <CardTheme />
        <CardTheme />
        <CardTheme />
        <CardTheme />
        <CardTheme />
        <CardTheme />
        <CardTheme />
      </div>
    </>
  );
}
