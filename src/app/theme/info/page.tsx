import Horizon from '@/app/_component/Horizon';
import styles from './page.module.css';
import { HintIcon, MoneyIcon, PeopleIcon, SynopsisIcon, TimeIcon } from '@/app/_component/Icons';
import ProgressBar from '@/app/_component/ProgressBar';
import { getScoreColor, getPointColor } from '@/untility';

export default function Info() {
  return (
    <div className={styles.infoWrapper}>
      <div>
        <div className={styles.infoBox}>
          <div>
            <PeopleIcon size={17} color="gray" />
            <div>인원</div>
          </div>
          <div>2~6인</div>
        </div>
        <div className={styles.infoBox}>
          <div>
            <MoneyIcon size={17} color="gray" />
            <div>가격</div>
          </div>
          <div>₩25,000</div>
        </div>
        <div className={styles.infoBox}>
          <div>
            <TimeIcon size={17} color="gray" />
            <div>시간 제한</div>
          </div>
          <div>65분</div>
        </div>
        <div className={styles.infoBox}>
          <div>
            <HintIcon size={17} color="gray" />
            <div>힌트 수</div>
          </div>
          <div>무제한</div>
        </div>
      </div>
      <div className={styles.infoBox} style={{ height: 'auto', width: '480rem' }}>
        <div style={{ marginBottom: '20rem' }}>
          <SynopsisIcon size={17} color="gray" />
          <div>시놉시스</div>
        </div>
        <div style={{ fontSize: '16rem', textAlign: 'center' }}>
          {'밤 10시.\n\n편안한 보금자리가 지옥으로 바뀌는 시간.'}
        </div>
      </div>
      <div className={styles.horizon} />
      <div>
        <div>
          <ProgressBar text="난이도" width={200} point={2.43} color={getPointColor(2.43).textColor} />
          <ProgressBar text="활동성" width={200} point={4.33} color={getPointColor(4.33).textColor} />
          <ProgressBar text="공포도" width={200} point={8.31} color={getPointColor(8.31).textColor} />
        </div>
        <div className={styles.vertical} />
        <div>
          <ProgressBar text="인테리어" width={200} point={9.42} color={getScoreColor(9.42).textColor} />
          <ProgressBar text="스토리" width={200} point={8.94} color={getScoreColor(8.94).textColor} />
          <ProgressBar text="연출" width={200} point={9.74} color={getScoreColor(9.74).textColor} />
          <ProgressBar text="문제 퀄리티" width={200} point={7.21} color={getScoreColor(7.21).textColor} />
        </div>
      </div>
    </div>
  );
}
