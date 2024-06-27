import styles from './postHeader.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function PostHeader({}) {
  return (
    <div className={styles.postHeader}>
      <Link href={'/user'}>
        <Image src={'/image/navi.jpeg'} alt="profile image" width={32} height={32} />
      </Link>
      <div style={{ fontSize: '20rem', color: 'black' }}>나비</div>
      <div>16초전</div>
    </div>
  );
}
