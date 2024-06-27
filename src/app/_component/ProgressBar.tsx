import styles from './progressbar.module.css';

interface Props {
  text: string;
  width: number;
  point: number;
  color: string;
}

export default function ProgressBar({ text, width, point, color }: Props) {
  return (
    <div className={styles.progressBarWrapper}>
      <div>{text}</div>
      <div style={{ width: `${width}rem`, textAlign: 'end' }}>
        <div style={{ width: `${(point / 10) * width}rem`, backgroundColor: color }}></div>
        <div>{`${point.toFixed(2)} / 10`}</div>
      </div>
    </div>
  );
}
