import styles from './photoList.module.css';

export default function PhotoList({}) {
  return (
    <div className={styles.photoList}>
      <div>
        <img src={'/image/후기.jpeg'} alt="profile image" />
      </div>
      <div>
        <img src={'/image/후기.jpeg'} alt="profile image" />
      </div>
      <div>
        <img src={'/image/후기.jpeg'} alt="profile image" />
        <div />
      </div>
    </div>
  );
}
