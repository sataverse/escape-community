'use client';

import styles from './reviewDetail.module.css';
import PhotoCarousel from './PhotoCarousel';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

interface Props {
  left: number;
  right: number;
  comment: string;
  modifyComment: (str: string) => void;
}

export default function ReviewDetailHorizontal({ left, right, comment, modifyComment }: Props) {
  const review =
    '저의 첫 인생테마입니다!\n인테리어와 스토리도 좋았지만, 연출은 진짜 10점 만점에 100점을 주고 싶었어요. 엄청나게 어둡고, 음향도 빵빵하고, 빨려 들어갈 것만 같은 공간까지 진짜 공포테마다운 공포테마였습니다. 공간 활용도 진짜 신기했습니다!\n스토리를 중요시하시는 분들은 녹스를 먼저 플레이하시고 오시는걸 권장해 드립니다.';

  return (
    <div className={styles.reviewDetailHorizontal} style={{ height: `${left}rem` }}>
      <div style={{ width: `${left}rem` }}>
        <PhotoCarousel />
      </div>
      <div style={{ width: `${right}rem` }}>
        <div>
          <PostHeader />
        </div>
        <div className="scrollbarHidden" style={{ height: `${left - 120}rem` }}>
          {review}
        </div>
        <div>
          <PostFooter />
          <textarea
            placeholder="댓글 달기..."
            style={{ width: `${right - 20}rem` }}
            value={comment}
            onChange={(e) => modifyComment(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
