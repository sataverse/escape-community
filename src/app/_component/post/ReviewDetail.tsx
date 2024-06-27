'use client';

import { useState } from 'react';
import ReviewDetailHorizontal from './ReviewDetailHorizontal';
import ReviewDetailVertical from './ReviewDetailVertical';

interface Props {
  type: 'normal' | 'modal';
}

export default function ReviewDetail({ type }: Props) {
  const [comment, setComment] = useState('');
  const modifyComment = (str: string) => {
    setComment(str);
  };

  if (type === 'normal') {
    return (
      <>
        <ReviewDetailHorizontal left={360} right={240} comment={comment} modifyComment={modifyComment} />
        <ReviewDetailVertical comment={comment} modifyComment={modifyComment} />
      </>
    );
  } else {
    return (
      <>
        <ReviewDetailHorizontal left={640} right={320} comment={comment} modifyComment={modifyComment} />
        <ReviewDetailHorizontal left={480} right={240} comment={comment} modifyComment={modifyComment} />
        <ReviewDetailVertical comment={comment} modifyComment={modifyComment} />
      </>
    );
  }
}
