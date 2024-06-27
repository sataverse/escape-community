import styles from './page.module.css';
import { PhotoIcon } from '@/app/_component/Icons';

export default function CreatePost({}) {
  return (
    <>
      <div className={styles.modalHeader}>
        <div style={{ fontSize: '24rem' }}>게시글 작성</div>
        <button>저장</button>
      </div>
      <div className={styles.modalBody}>
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
    </>
  );
}
