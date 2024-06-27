'use client';

import styles from './page.module.css';
import ReviewDetail from '@/app/_component/post/ReviewDetail';

export default function PostModal({}) {
  return (
    <div className={styles.reviewDetailModal} onClick={(e) => e.stopPropagation()}>
      <ReviewDetail type="modal" />
    </div>
  );
}
