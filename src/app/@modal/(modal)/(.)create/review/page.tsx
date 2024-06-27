'use client';

import {
  ActivityLeft,
  ActivityRight,
  HorrorLeft,
  HorrorRight,
  LockLeft,
  LockRight,
  StarLeft,
  StarRight,
} from '@/app/_component/Button';
import styles from './page.module.css';
import { useRef, useState } from 'react';
import { ChangeIcon, PhotoIcon } from '@/app/_component/Icons';

interface ReviewInfos {
  clear: boolean | null;
  players: number | null;
  hints: number | null;
  remain: [number, number] | null;
  score: number | null;
  difficulty: number | null;
  activity: number | null;
  horror: number | null;
  interior: number | null;
  direction: number | null;
  story: number | null;
  puzzle: number | null;
  comment: string | null;
}

interface RatingButtonsProps {
  icon: 'star' | 'lock' | 'activity' | 'horror';
  score: number;
}

function RatingButtons({ icon, score }: RatingButtonsProps) {
  const temp = [0, 2, 4, 6, 8];
  if (icon === 'star') {
    return (
      <div>
        <button>0</button>
        {temp.map((item) => {
          return (
            <>
              <button>
                <StarLeft size={30} color={score > item ? '#ffd600' : '#d9d9d9'} />
              </button>
              <button>
                <StarRight size={30} color={score > item + 1 ? '#ffd600' : '#d9d9d9'} />
              </button>
            </>
          );
        })}
      </div>
    );
  } else if (icon === 'lock') {
    return (
      <div>
        <button>0</button>
        {temp.map((item) => {
          return (
            <>
              <button>
                <LockLeft size={30} color={score > item ? '#ffd600' : '#d9d9d9'} />
              </button>
              <button>
                <LockRight size={30} color={score > item + 1 ? '#ffd600' : '#d9d9d9'} />
              </button>
            </>
          );
        })}
      </div>
    );
  } else if (icon === 'activity') {
    return (
      <div>
        <button>0</button>
        {temp.map((item) => {
          return (
            <>
              <button>
                <ActivityLeft size={30} color={score > item ? '#ffd600' : '#d9d9d9'} />
              </button>
              <button>
                <ActivityRight size={30} color={score > item + 1 ? '#ffd600' : '#d9d9d9'} />
              </button>
            </>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <button>0</button>
        {temp.map((item) => {
          return (
            <>
              <button>
                <HorrorLeft size={30} color={score > item ? '#ffd600' : '#d9d9d9'} />
              </button>
              <button>
                <HorrorRight size={30} color={score > item + 1 ? '#ffd600' : '#d9d9d9'} />
              </button>
            </>
          );
        })}
      </div>
    );
  }
}

export default function CreateReview({}) {
  const review: ReviewInfos = {
    clear: true,
    players: 3,
    hints: 2,
    remain: [10, 30],
    score: 10,
    difficulty: 3,
    activity: 4,
    horror: 7,
    interior: 10,
    direction: 10,
    story: 10,
    puzzle: 7,
    comment: '',
  };

  const [date, setDate] = useState('2024-06-20');

  return (
    <>
      <div className={styles.modalHeader}>
        <div style={{ fontSize: '24rem' }}>리뷰 작성</div>
        <button>저장</button>
      </div>
      <div className={styles.modalBody}>
        <div>
          <div className={styles.themeInfo}>
            <img src="/image/층간소음.jpeg" alt="층간소음" />
            <div>
              <div style={{ fontSize: '20rem' }}>{'층간소음'}</div>
              <div style={{ color: 'gray' }}>{'제로월드 홍대점'}</div>
            </div>
          </div>
          <div className={styles.horizon} />
          <div className={styles.record}>
            <div>탈출 여부</div>
            <div style={{ width: '126rem' }}>
              <button style={{ width: '60rem' }}>성공</button>
              <button style={{ width: '60rem' }}>실패</button>
            </div>
          </div>
          <div className={styles.record}>
            <div>플레이 날짜</div>
            <div>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
          <div className={styles.record}>
            <div>플레이 인원</div>
            <div style={{ width: '122rem' }}>
              <button>-</button>
              <input type="number" />
              <button>+</button>
            </div>
          </div>
          <div className={styles.record}>
            <div>사용 힌트 수</div>
            <div style={{ width: '122rem' }}>
              <button>-</button>
              <input type="number" />
              <button>+</button>
            </div>
          </div>
          <div className={styles.record}>
            <div>플레이 타임</div>
            <div style={{ width: '272rem' }}>
              <button>
                <div style={{ position: 'relative', top: '2rem' }}>
                  <ChangeIcon size={20} color="gray" />
                </div>
              </button>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="number" />
                <div>분</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="number" />
                <div>초 남음 / 100분</div>
              </div>
            </div>
          </div>
          <div className={styles.horizon} />
          <div className={styles.rating}>
            <div>만족도</div>
            <RatingButtons icon="star" score={10} />
          </div>
          <div className={styles.rating}>
            <div>난이도</div>
            <RatingButtons icon="lock" score={3} />
          </div>
          <div className={styles.rating}>
            <div>활동성</div>
            <RatingButtons icon="activity" score={4} />
          </div>
          <div className={styles.rating}>
            <div>공포도</div>
            <RatingButtons icon="horror" score={7} />
          </div>
          <div className={styles.horizon} />
          <div className={styles.rating}>
            <div>인테리어</div>
            <RatingButtons icon="star" score={10} />
          </div>
          <div className={styles.rating}>
            <div>연출</div>
            <RatingButtons icon="star" score={10} />
          </div>
          <div className={styles.rating}>
            <div>스토리</div>
            <RatingButtons icon="star" score={10} />
          </div>
          <div className={styles.rating}>
            <div>문제 퀄리티</div>
            <RatingButtons icon="star" score={10} />
          </div>
          <div className={styles.horizon} />
          <div className={styles.photo}>
            <button>
              <div style={{ position: 'relative', left: '1.7rem' }}>
                <PhotoIcon size={36} color="gray" />
              </div>
            </button>
            <div>
              <img src="/image/후기.jpeg" alt="후기" />
              <img src="/image/후기.jpeg" alt="후기" />
              <img src="/image/후기.jpeg" alt="후기" />
            </div>
          </div>
          <textarea className={styles.comment} placeholder="리뷰 글쓰기..." />
        </div>
      </div>
    </>
  );
}
