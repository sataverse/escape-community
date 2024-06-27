import LinkGroup from '../_component/LinkGroup';
import PageHeader from '../_component/PageHeader';
import styles from './layout.module.css';
import { AddIcon, LikeIcon, StarIcon } from '@/app/_component/Icons';
import { TextColor, getScoreColor } from '@/untility';
import { LikeButtonMini } from '../_component/LikeButton';
import Link from 'next/link';

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { textColor } = getScoreColor(9.2);

  return (
    <>
      <PageHeader text="테마 정보" />
      <div className={styles.mainInfoWrapper}>
        <div>
          <img src={'/image/층간소음.jpeg'} alt="이미지" />
          <LikeButtonMini />
          <Link href={'/create/review'}>
            <div>
              <AddIcon size={30} color="white" />
            </div>
          </Link>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: '20rem', marginRight: '6rem' }}>층간소음</div>
            <div style={{ color: 'gray' }}>공포</div>
          </div>
          <div style={{ color: 'gray' }}>홍대 | 제로월드 홍대점</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={styles.iconLabel}>
            <StarIcon size={17} color={textColor} />
            <div style={{ color: textColor }}>9.0</div>
          </div>
          <div className={styles.iconLabel}>
            <LikeIcon size={17} color={TextColor.BLUE} />
            <div style={{ color: TextColor.BLUE }}>1607</div>
          </div>
        </div>
      </div>
      <LinkGroup
        linkInfos={[
          { text: '정보', to: '/theme/info' },
          { text: '리뷰', to: '/theme/review' },
        ]}
      />
      <div className={styles.horizon} />
      {children}
    </>
  );
}
