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
      <PageHeader text="피드" />
      <LinkGroup
        linkInfos={[
          { text: '리뷰', to: '/feed/review' },
          { text: '게시물', to: '/feed/post' },
        ]}
      />
      <div className={styles.horizon} />
      {children}
    </>
  );
}
