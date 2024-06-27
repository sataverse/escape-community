'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { HomeIcon, ReviewIcon, SearchIcon, AddIcon } from './Icons';
import styles from './navMenu.module.css';

interface Props {
  isSelected: boolean;
  iconSelected: JSX.Element;
  iconUnselected: JSX.Element;
  text: string;
}

function NavElement({ isSelected, iconSelected, iconUnselected, text }: Props) {
  return (
    <div className={styles.navElement}>
      {isSelected ? iconSelected : iconUnselected}
      <div style={isSelected ? { fontWeight: 'bold', color: 'black' } : { fontWeight: 'normal', color: 'gray' }}>
        {text}
      </div>
    </div>
  );
}

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <li>
        <Link href="/home">
          <NavElement
            isSelected={segment === 'home'}
            iconSelected={<HomeIcon size={36} color={'black'} />}
            iconUnselected={<HomeIcon size={36} color={'gray'} />}
            text={'홈'}
          />
        </Link>
      </li>
      <li>
        <Link href="/feed">
          <NavElement
            isSelected={segment === 'feed'}
            iconSelected={<ReviewIcon size={36} color={'black'} />}
            iconUnselected={<ReviewIcon size={36} color={'gray'} />}
            text={'피드'}
          />
        </Link>
      </li>
      <li>
        <Link href="/search">
          <NavElement
            isSelected={segment === 'search'}
            iconSelected={<SearchIcon size={36} color={'black'} />}
            iconUnselected={<SearchIcon size={36} color={'gray'} />}
            text={'검색'}
          />
        </Link>
      </li>
      <li>
        <Link href="/create/post">
          <NavElement
            isSelected={segment === 'create'}
            iconSelected={<AddIcon size={36} color={'black'} />}
            iconUnselected={<AddIcon size={36} color={'gray'} />}
            text={'글쓰기'}
          />
        </Link>
      </li>
      <li>
        <Link href="/user">
          <div className={styles.navElement}>
            <Image className={styles.profileImage} src={'/image/navi.jpeg'} alt="profile" width={40} height={40} />
            <div
              style={
                segment === 'user' ? { fontWeight: 'bold', color: 'black' } : { fontWeight: 'normal', color: 'gray' }
              }
            >
              MY
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/signin">
          <div className={styles.navElement}>
            <div
              style={
                segment === 'signin' ? { fontWeight: 'bold', color: 'black' } : { fontWeight: 'normal', color: 'gray' }
              }
            >
              {'로그인(임시)'}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}
