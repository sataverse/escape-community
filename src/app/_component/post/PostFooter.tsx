import styles from './postfooter.module.css';
import { LikeButton } from '../LikeButton';
import IconTextLabel from '../IconTextLabel';
import { CommentIcon } from '../Icons';
import { TextColor } from '@/untility';

export default function PostFooter({}) {
  return (
    <div className={styles.postFooter}>
      <LikeButton num={27} />
      <button>
        <IconTextLabel
          icon={<CommentIcon size={19} color={TextColor.BLUE} />}
          text="3"
          font={18}
          textColor={TextColor.BLUE}
          bgColor={'transparent'}
        />
      </button>
    </div>
  );
}
