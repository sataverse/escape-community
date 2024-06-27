import { CommentIcon, LikeIcon, StarIcon } from '@/app/_component/Icons';
import styles from './imageGrid.module.css';
import Link from 'next/link';

interface Props {
  type: 'review' | 'post' | 'likes';
  quantity: number;
}

export default function ImageGrid({ type, quantity }: Props) {
  const temp = [0, 0, 0, 0, 0, 0, 0, 0, 0].slice(0, quantity);
  return (
    <div className={styles.gridWrapper}>
      {temp.map((_) => {
        if (type === 'review') {
          return (
            <Link href={'/post'}>
              <div>
                <img src="/image/층간소음.jpeg" />
                <div>
                  <div style={{ height: '90rem' }}>
                    <div>
                      <StarIcon size={28} color="white" />
                      <div>10</div>
                    </div>
                    <div>
                      <LikeIcon size={26} color="white" />
                      <div>640</div>
                    </div>
                    <div>
                      <CommentIcon size={24} color="white" />
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        } else if (type === 'post') {
          return (
            <Link href={'/home'}>
              <div>
                <img src="/image/후기.jpeg" />
                <div>
                  <div style={{ height: '60rem' }}>
                    <div>
                      <LikeIcon size={26} color="white" />
                      <div>640</div>
                    </div>
                    <div>
                      <CommentIcon size={24} color="white" />
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        } else {
          return (
            <Link href={'/theme/info'}>
              <div>
                <img src="/image/층간소음.jpeg" />
                <div>
                  <div style={{ height: '60rem' }}>
                    <div>
                      <StarIcon size={26} color="white" />
                      <div>640</div>
                    </div>
                    <div>
                      <LikeIcon size={24} color="white" />
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}
