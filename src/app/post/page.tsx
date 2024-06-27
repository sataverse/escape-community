import ImageGrid from '../_component/ImageGrid';
import PageHeader from '../_component/PageHeader';
import ReviewDetail from '../_component/post/ReviewDetail';
import styles from './page.module.css';

export default function PostPage({}) {
  return (
    <>
      <PageHeader text="게시물" />
      <div className={styles.reviewDetail}>
        <ReviewDetail type="normal" />
      </div>
      <div className={styles.horizon} />
      <div className={styles.text}>나비님의 게시물 더 보기</div>
      <ImageGrid type="review" quantity={6} />
    </>
  );
}
