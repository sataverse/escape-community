'use client';

import { useState } from 'react';
import styles from './likeButton.module.css';
import IconTextLabel from './IconTextLabel';
import { LikeIcon } from './Icons';
import { TextColor, BgColor } from '@/untility';

interface Props {
  num: number;
}

export function LikeButton({ num }: Props) {
  const [like, setLike] = useState(false);
  const clickLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLike(!like);
    e.preventDefault();
  };

  return (
    <button onClick={(e) => clickLikeButton(e)}>
      <IconTextLabel
        icon={<LikeIcon size={19} color={like ? 'white' : TextColor.BLUE} />}
        text={(num + (like ? 1 : 0)).toString()}
        font={18}
        textColor={like ? 'white' : TextColor.BLUE}
        bgColor={like ? TextColor.BLUE : 'transparent'}
      />
    </button>
  );
}

export function LikeButtonMini() {
  const [like, setLike] = useState(false);
  const clickLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLike(!like);
    e.preventDefault();
  };

  return (
    <button className={styles.miniButton} onClick={(e) => clickLikeButton(e)}>
      <div>
        <LikeIcon size={30} color={like ? TextColor.BLUE : 'white'} />
      </div>
    </button>
  );
}
