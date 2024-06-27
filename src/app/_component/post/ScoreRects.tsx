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
          <div style={{ width: score === 1 ? '20rem' : score > 1 ? '38rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 3 ? '20rem' : score > 3 ? '38rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 5 ? '20rem' : score > 5 ? '38rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 7 ? '20rem' : score > 7 ? '38rem' : '0' }} />
        </div>
        <div>
          <div style={{ width: score === 9 ? '20rem' : score > 9 ? '38rem' : '0' }} />
        </div>
      </div>
    </div>
  );
}
