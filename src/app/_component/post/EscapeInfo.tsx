import styles from './escapeInfo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import IconTextLabel from '../IconTextLabel';
import ScoreRects from './ScoreRects';
import { StarIcon, LockIcon, ActivityIcon, HorrorIcon } from '../Icons';
import { TextColor, getScoreColor, getPointColor } from '@/untility';

export default function EscapeInfo() {
  const [scoreColor, difficultyColor, activityColor, horrorColor] = [
    getScoreColor(10),
    getPointColor(3),
    getPointColor(4),
    getPointColor(6),
  ];
  return (
    <>
      <div className={styles.top}>
        <div className={styles.flex}>
          <Link href={'/theme'}>
            <Image src={'/image/층간소음.jpeg'} alt="층간소음" width={80} height={80} />
          </Link>
          <div>
            <div className={styles.flex}>
              <div style={{ color: 'black', fontSize: '18rem' }}>층간소음</div>
              <div>제로월드 홍대점</div>
            </div>
            <div className={styles.flex}>
              <div>2024.04.28</div>
              <div>|</div>
              <div>3인</div>
            </div>
            <div className={styles.flex}>
              <div style={{ color: TextColor.BLUE }}>성공</div>
              <div>|</div>
              <div>54분 30초 / 65분</div>
              <div>|</div>
              <div>힌트 2개</div>
            </div>
          </div>
        </div>
        <div className={styles.flex}>
          <IconTextLabel
            icon={<StarIcon size={15} color={scoreColor.textColor} />}
            text="10/10"
            font={14}
            textColor={scoreColor.textColor}
            bgColor={scoreColor.bgColor}
          />
          <IconTextLabel
            icon={<LockIcon size={15} color={difficultyColor.textColor} />}
            text="3/10"
            font={14}
            textColor={difficultyColor.textColor}
            bgColor={difficultyColor.bgColor}
          />
          <IconTextLabel
            icon={<ActivityIcon size={15} color={activityColor.textColor} />}
            text="4/10"
            font={14}
            textColor={activityColor.textColor}
            bgColor={activityColor.bgColor}
          />
          <IconTextLabel
            icon={<HorrorIcon size={15} color={horrorColor.textColor} />}
            text="6/10"
            font={14}
            textColor={horrorColor.textColor}
            bgColor={horrorColor.bgColor}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <ScoreRects text="인테리어" score={10} />
        <ScoreRects text="연출" score={10} />
        <ScoreRects text="스토리" score={10} />
        <ScoreRects text="문제 퀄리티" score={7} />
      </div>
    </>
  );
}
