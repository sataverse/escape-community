import Link from 'next/link';
import styles from './userProfile.module.css';

export default function UserProfile({}) {
  return (
    <Link href={'/user/review'}>
      <div className={styles.userProfile}>
        <img src="/image/navi.jpeg" alt="프로필" />
        <div>
          <div>
            <div style={{ fontSize: '20rem', marginRight: '10rem' }}>{'나비'}</div>
            <div style={{ fontSize: '18rem', color: 'gray' }}>{'리뷰 33'}</div>
          </div>
          <div>{'30+ 방세포의 지극히 주관적인 리뷰\n의도치 않은 스포일러가 있을 수 있습니다\n글 잘 못써요'}</div>
        </div>
      </div>
    </Link>
  );
}
