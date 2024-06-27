import LinkGroup from '../_component/LinkGroup';
import PageHeader from '../_component/PageHeader';
import SortComboBox from '../_component/SortComboBox';
import SearchBox from './_component/SearchBox';
import styles from './layout.module.css';

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader text="검색" />
      <LinkGroup
        linkInfos={[
          { text: '테마', to: '/search/theme' },
          { text: '매장', to: '/search/shop' },
          { text: '사용자', to: '/search/user' },
        ]}
      />
      <div className={styles.horizon} />
      <SearchBox />
      <SortComboBox list={['최신 테마순', '평점 높은 순', '난이도 낮은 순', '난이도 높은 순']} />
      {children}
    </>
  );
}
