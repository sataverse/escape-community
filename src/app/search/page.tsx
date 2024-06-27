'use client';

import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  router.replace('/search/theme');
  return null;
}
