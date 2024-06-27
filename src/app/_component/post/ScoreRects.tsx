import styles from './scoreRect.module.css';

interface Props {
  text: string;
  score: number;
}

export default function ScoreRects({ text, score }: Props) {
  return (
    <div className={styles.scoreRectsWrapper}>
      <div>{text}</div>
      <div>
        <div>
          <div style={{ width: score === 1 ? '19rem' : score > 1 ? '37rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 3 ? '19rem' : score > 3 ? '37rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 5 ? '19rem' : score > 5 ? '37rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 7 ? '19rem' : score > 7 ? '37rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 9 ? '19rem' : score > 9 ? '37rem' : '0' }} />
        </div>
      </div>
    </div>
  );
}
