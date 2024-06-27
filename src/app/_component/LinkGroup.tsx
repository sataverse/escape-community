'use client';

import Link from 'next/link';
import styles from './linkGroup.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';

interface LinkInfo {
  text: string;
  to: string;
}

interface Props {
  linkInfos: LinkInfo[];
}

export default function LinkGroup({ linkInfos }: Props) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className={styles.linkGroupWrapper}>
      {linkInfos.map((item, idx) => (
        <Link key={idx} href={item.to}>
          <div
            style={{
              borderBottom:
                segment === item.to.split('/')[item.to.split('/').length - 1]
                  ? '3px solid black'
                  : '3px solid transparent',
            }}
          >
            {item.text}
          </div>
        </Link>
      ))}
    </div>
  );
}
