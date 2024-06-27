import styles from './pageHeader.module.css';
import { Logo } from './Logo';

interface Props {
  text: string;
}

export default function PageHeader({ text }: Props) {
  return (
    <>
      <div className={styles.headerWrapperTransparent}>
        <header>
          <div className={styles.headerContent}>{text}</div>
        </header>
      </div>
      <div className={styles.headerWrapper}>
        <header>
          <Logo width={108} height={72} />
        </header>
      </div>
    </>
  );
}
