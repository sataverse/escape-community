import CardTheme from '@/app/_component/CardTheme';
import styles from './grid.module.css';
import CardShop from '@/app/_component/CardShop';
import UserProfile from './UserProfile';

interface Props {
  type: 'theme' | 'shop' | 'user';
}

export default function Grid({ type }: Props) {
  if (type === 'theme') {
    return (
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
    );
  } else if (type === 'shop') {
    return (
      <div className={styles.gridWrapper}>
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
      </div>
    );
  } else {
    return (
      <div className={styles.gridWrapper}>
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    );
  }
}
