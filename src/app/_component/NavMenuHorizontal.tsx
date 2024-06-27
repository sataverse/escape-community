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
}

function NavElement({ isSelected, iconSelected, iconUnselected }: Props) {
  return <div>{isSelected ? iconSelected : iconUnselected}</div>;
}

export default function NavMenuHorizontal() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <Link href="/home">
        <NavElement
          isSelected={segment === 'home'}
          iconSelected={<HomeIcon size={36} color={'black'} />}
          iconUnselected={<HomeIcon size={36} color={'gray'} />}
        />
      </Link>
      <Link href="/feed">
        <NavElement
          isSelected={segment === 'feed'}
          iconSelected={<ReviewIcon size={36} color={'black'} />}
          iconUnselected={<ReviewIcon size={36} color={'gray'} />}
        />
      </Link>
      <Link href="/search">
        <NavElement
          isSelected={segment === 'search'}
          iconSelected={<SearchIcon size={36} color={'black'} />}
          iconUnselected={<SearchIcon size={36} color={'gray'} />}
        />
      </Link>
      <Link href="/create/post">
        <NavElement
          isSelected={segment === 'create'}
          iconSelected={<AddIcon size={36} color={'black'} />}
          iconUnselected={<AddIcon size={36} color={'gray'} />}
        />
      </Link>
      <Link href="/user">
        <div>
          <Image className={styles.profileImage} src={'/image/navi.jpeg'} alt="profile" width={40} height={40} />
        </div>
      </Link>
    </>
  );
}
