'use client';

import { CloseIcon, FilterIcon, SearchIcon } from '@/app/_component/Icons';
import styles from './searchBox.module.css';
import { useState } from 'react';

interface Filter {
  type: number;
  location: number;
}

export default function SearchBox({}) {
  const [searchWord, setSearchWord] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState(0);

  return (
    <div className={styles.searchBoxWrapper}>
      <div className={styles.searchBarWrapper}>
        <SearchIcon size={30} color="#bababa" />
        <input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
        <button onClick={() => setShowFilter(!showFilter)}>
          <FilterIcon size={24} color="#bababa" />
        </button>
        <button onClick={() => setSearchWord('')}>
          <CloseIcon size={24} color="#bababa" />
        </button>
      </div>
      <div className={styles.filterBoxWrapper} style={{ height: showFilter ? '90rem' : '0rem' }}>
        <div>
          <div>지역</div>
          <div>
            <button onClick={() => setFilter(0)} style={{ backgroundColor: filter === 0 ? '#d9d9d9' : 'white' }}>
              전체
            </button>
            <button onClick={() => setFilter(1)} style={{ backgroundColor: filter === 1 ? '#d9d9d9' : 'white' }}>
              강남
            </button>
            <button onClick={() => setFilter(2)} style={{ backgroundColor: filter === 2 ? '#d9d9d9' : 'white' }}>
              홍대
            </button>
            <button onClick={() => setFilter(3)} style={{ backgroundColor: filter === 3 ? '#d9d9d9' : 'white' }}>
              신촌
            </button>
            <button onClick={() => setFilter(4)} style={{ backgroundColor: filter === 4 ? '#d9d9d9' : 'white' }}>
              건대
            </button>
            <button onClick={() => setFilter(5)} style={{ backgroundColor: filter === 5 ? '#d9d9d9' : 'white' }}>
              서울 기타
            </button>
            <button onClick={() => setFilter(6)} style={{ backgroundColor: filter === 6 ? '#d9d9d9' : 'white' }}>
              인천
            </button>
            <button onClick={() => setFilter(7)} style={{ backgroundColor: filter === 7 ? '#d9d9d9' : 'white' }}>
              경기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
