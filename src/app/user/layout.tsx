import React from 'react';
import LinkGroup from '../_component/LinkGroup';
import PageHeader from '../_component/PageHeader';
import styles from './layout.module.css';

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader text="프로필" />
      <div className={styles.profileWrapper}>
        <img src="/image/navi.jpeg" alt="프로필" />
        <div>
          <div>
            <div>나비</div>
            <button>프로필 편집</button>
          </div>
          <div>
            <div>리뷰 33</div>
            <div>게시물 6</div>
            <div>좋아요 84</div>
          </div>
          <div>{'30+ 방세포의 지극히 주관적인 리뷰\n의도치 않은 스포일러가 있을 수 있습니다\n글 잘 못써요'}</div>
        </div>
      </div>
      <LinkGroup
        linkInfos={[
          { text: '리뷰', to: '/user/review' },
          { text: '게시물', to: '/user/post' },
          { text: '좋아요', to: '/user/likes' },
        ]}
      />
      <div className={styles.horizon} />
      {children}
    </>
  );
}
